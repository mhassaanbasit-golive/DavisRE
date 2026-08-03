import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client lazily/safely
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API Endpoint: Ask davisRE AI
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const ai = getGeminiClient();

      const systemInstruction = `You are "Ask davisRE AI", the official AI Investment Assistant for davisRE — an entrepreneurial real estate investment & syndication firm based in Dallas, Texas.
Your purpose is to assist accredited investors, capital partners, brokers, and property owners with clear, concise, institutional-grade responses.

KEY DAVISRE INSTITUTIONAL DATA:
- Firm Overview: davisRE is an entrepreneurial real estate investment company based in Dallas, TX, led by CEO Stacey Davis (SMU Cox School of Business graduate).
- Core Track Record: 30+ Years of Experience, 44.42% Average IRR, 2.08x Equity Multiple, 2-3 Year Target Hold Period.
- Investment Strategy: Repositioning underperforming commercial office/retail in Dallas/Fort Worth, and acquiring Class B & C Multifamily communities across Texas and key growth markets.
- Core Values: Integrity ("We do what we say we are going to do"), Prosperity, Confidence, Family, Team.
- Key Leadership: Stacey Davis (CEO), Andrew Hanson (Acquisitions), Donna Perkins (Operations).
- Active Assets & Performance:
  1. The Carolina (4929 Reiger, Dallas TX) — 71.20% IRR | 2.36x Equity Multiple | Multifamily
  2. Glendale Oaks (5656 Live Oak, Dallas TX) — 49.41% IRR | 3.86x Equity Multiple | Multifamily
  3. Paragon (4718-4722 Reiger, Dallas TX) — 27.25% IRR | 2.37x Equity Multiple | Repositioning
  4. Reiger Park (4618 Reiger, Dallas TX) — 68.24% IRR | 2.08x Equity Multiple | Multifamily
  5. The Canopy (9201 Kanis, Little Rock AK) — 35.00% IRR | 2.80x Equity Multiple | Multifamily
  6. Highland Midtown (400 N University, Little Rock AK) — 16.67% IRR | 1.66x Equity Multiple | Commercial
  7. The Marquee on Gaston (5515 Gaston, Dallas TX) — 16.39% IRR | 1.43x Equity Multiple | Multifamily
  8. The Newport (4950 Live Oak, Dallas TX) — 30.37% IRR | 1.50x Equity Multiple | Multifamily
  9. The View (800-808 Blaylock, Dallas TX) — 50.55% IRR | 2.66x Equity Multiple | Repositioning
  10. The Wilshire (811 Skillman, Dallas TX) — 56.69% IRR | 2.30x Equity Multiple | Multifamily
- Investor Portal: Offers real-time performance dashboards, CMy digital document vault for K-1s, and simple asset breakdown for accredited investors.
- Contact Details: 3000 San Jacinto St, Dallas, TX 75204 | Phone: (214) 979-0400 | Email: sdavis@davis-re.com.

RESPONSE STYLE:
- Professional, direct, articulate, editorial luxury tone.
- Keep answers concise and bulleted where appropriate. Never use hyperbole, fluff, or sales pitches.
- Emphasize financial competence, risk-adjusted returns, and transparent syndication metrics.`;

      if (ai) {
        // Construct prompt with chat history if provided
        let contentsPrompt = message;
        if (Array.isArray(history) && history.length > 0) {
          const formattedHistory = history
            .map((h: { role: string; content: string }) => `${h.role === 'user' ? 'Investor' : 'Ask davisRE AI'}: ${h.content}`)
            .join("\n");
          contentsPrompt = `Previous Conversation:\n${formattedHistory}\n\nInvestor: ${message}`;
        }

        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: contentsPrompt,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

        const reply = response.text || "Thank you for inquiring with davisRE AI. Our executive team is available at sdavis@davis-re.com or (214) 979-0400 to assist with accredited investment opportunities.";
        return res.json({ reply });
      }

      // Intelligent Fallback if GEMINI_API_KEY is not yet populated
      const lower = message.toLowerCase();
      let fallbackReply = "davisRE is an entrepreneurial real estate investment firm in Dallas, TX with 30+ years of experience, a 44.42% average IRR, and a 2.08x equity multiple. How may I assist your investment portfolio today?";

      if (lower.includes("irr") || lower.includes("return") || lower.includes("track record") || lower.includes("stat")) {
        fallbackReply = "davisRE has achieved a 44.42% average IRR and a 2.08x equity multiple across our portfolio, with a typical 2-3 year hold period targeting value-add office, retail, and Class B & C multifamily assets in Texas.";
      } else if (lower.includes("team") || lower.includes("stacey") || lower.includes("davis") || lower.includes("who")) {
        fallbackReply = "davisRE is led by CEO Stacey Davis (SMU Cox School of Business graduate), alongside Andrew Hanson (Head of Acquisitions) and Donna Perkins (Operations), providing hands-on aggressive asset management and deep local Dallas market access.";
      } else if (lower.includes("project") || lower.includes("property") || lower.includes("carolina") || lower.includes("glendale")) {
        fallbackReply = "Our portfolio includes top-performing properties like The Carolina (71.20% IRR, 2.36x EqMult), Glendale Oaks (49.41% IRR, 3.86x EqMult), Reiger Park (68.24% IRR), and The Wilshire (56.69% IRR). Visit our Projects page to explore our full active portfolio.";
      } else if (lower.includes("investor") || lower.includes("accredited") || lower.includes("portal") || lower.includes("minimum")) {
        fallbackReply = "Our Investor Portal provides accredited investors with real-time performance dashboards, secure CMy document storage, K-1 access, and transparent asset breakdowns. Contact Stacey Davis at sdavis@davis-re.com to verify accredited status.";
      } else if (lower.includes("contact") || lower.includes("address") || lower.includes("phone") || lower.includes("email")) {
        fallbackReply = "davisRE Headquarters: 3000 San Jacinto St, Dallas, TX 75204 | Phone: (214) 979-0400 | Email: sdavis@davis-re.com.";
      }

      return res.json({ reply: fallbackReply });
    } catch (err) {
      console.error("Chat API error:", err);
      return res.status(500).json({
        reply: "davisRE AI is temporarily adjusting data streams. Please contact our Dallas office at (214) 979-0400 or sdavis@davis-re.com for immediate investor assistance."
      });
    }
  });

  // API Endpoint: Contact Inquiry Submission
  app.post("/api/contact", (req, res) => {
    const { firstName, lastName, email, phone, isAccredited, message } = req.body;
    if (!email || !firstName || !lastName) {
      return res.status(400).json({ error: "First name, last name, and email are required." });
    }
    console.log("Inquiry received for davisRE:", { firstName, lastName, email, phone, isAccredited, message });
    return res.json({ success: true, message: "Inquiry received. A davisRE partner will contact you shortly." });
  });

  // Vite middleware for development vs static serve in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`davisRE Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
