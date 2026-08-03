import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, ChevronRight } from 'lucide-react';
import { ChatMessage } from '../types';
import { DavisReLogo } from './DavisReLogo';

export const AskDavisAiWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Welcome to davisRE. How may I assist you with our Dallas commercial repositioning, 44.42% IRR track record, or accredited syndication strategy?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          history: messages.slice(-6).map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'davisRE provides high-yield value-add real estate investment in Dallas, TX. Please reach out to sdavis@davis-re.com for direct investor relations.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error('AI chat request failed:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'davisRE operates with 30+ years of Dallas market expertise, achieving a 44.42% average IRR. Contact sdavis@davis-re.com or call (214) 979-0400 for accredited investor access.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    "What is davisRE's average IRR?",
    "Class B & C Multifamily strategy?",
    "How to invest in portal?"
  ];

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 font-sans flex flex-col items-end">
      {/* Floating Pill Trigger Button - Small & Compact with davisRE Logo */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 h-10 rounded-full bg-white/95 backdrop-blur-md text-black font-sans font-medium text-xs sm:text-sm border border-[#52B768] shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          style={{
            boxShadow: '0 4px 18px rgba(82, 183, 104, 0.35)',
          }}
          aria-label="Ask davisRE"
        >
          <DavisReLogo variant="icon-only" iconHeight={18} />
          <span className="font-semibold text-black tracking-tight text-xs sm:text-sm">Ask davisRE</span>
        </motion.button>
      )}

      {/* Expanded Chat Dialog - Optimized for mobile & small screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100vw-1.5rem)] max-w-[350px] sm:w-[360px] h-[70vh] max-h-[460px] sm:max-h-[500px] bg-white rounded-2xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden text-black"
          >
            {/* Header with davisRE Logo mark */}
            <div className="p-3 sm:p-3.5 bg-white border-b border-gray-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center p-1 shrink-0">
                  <DavisReLogo variant="icon-only" iconHeight={20} />
                </div>
                <div>
                  <div className="flex items-baseline leading-tight">
                    <span className="font-sans font-light tracking-[0.18em] text-sm text-[#4A4C50]">
                      davis
                    </span>
                    <span className="font-sans font-normal tracking-[0.15em] text-sm text-[#52B768] ml-0.5">
                      RE
                    </span>
                    <span className="text-[10px] font-sans font-semibold text-gray-500 ml-1.5 uppercase tracking-wider">
                      Concierge
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-sans tracking-tight mt-0.5">
                    Dallas Real Estate Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50/50 text-xs sm:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 p-0.5 shadow-2xs">
                      <DavisReLogo variant="icon-only" iconHeight={14} />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] p-2.5 sm:p-3 rounded-xl leading-relaxed text-xs ${
                      msg.role === 'user'
                        ? 'bg-black text-white rounded-br-none'
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-2xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                    <span
                      className={`block text-[9px] mt-1 text-right ${
                        msg.role === 'user' ? 'text-gray-400' : 'text-gray-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-6 h-6 rounded-md bg-gray-900 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center shrink-0 p-0.5 animate-pulse">
                    <DavisReLogo variant="icon-only" iconHeight={14} />
                  </div>
                  <div className="bg-white border border-gray-200 p-2.5 rounded-xl text-xs text-gray-500 italic">
                    Analyzing investment parameters...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            {messages.length < 4 && (
              <div className="p-1.5 px-2.5 bg-white border-t border-gray-100 flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
                {sampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="text-[10px] font-sans whitespace-nowrap px-2 py-1 bg-gray-50 hover:bg-[#52B768]/10 border border-gray-200 hover:border-[#52B768] text-gray-700 hover:text-[#52B768] rounded-full transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span>{q}</span>
                    <ChevronRight className="w-2.5 h-2.5 text-[#52B768]" />
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-2.5 bg-white border-t border-gray-100 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-1.5"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about IRR, Dallas assets..."
                  className="flex-1 bg-gray-50 border border-gray-200 focus:border-[#52B768] focus:ring-1 focus:ring-[#52B768] rounded-lg px-3 py-2 text-xs text-black placeholder-gray-400 outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg bg-[#52B768] hover:bg-[#409753] disabled:opacity-40 text-white flex items-center justify-center transition-all shrink-0 cursor-pointer"
                  aria-label="Send Message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

