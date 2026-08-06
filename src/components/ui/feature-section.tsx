"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
  items?: string[];
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 5000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 100 / (autoPlayInterval / 100);
        setCurrentFeature((c) => (c + 1) % features.length);
        return 0;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [features.length, autoPlayInterval]);

  const select = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  const active = features[currentFeature];

  return (
    <div className={cn("mx-auto w-full", className)}>
      {title ? <h2 className="type-h2 mb-14 max-w-[16ch]">{title}</h2> : null}

      <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-20">
        <div className="order-2 border-t border-rule lg:order-1">
          {features.map((feature, index) => {
            const isActive = index === currentFeature;
            return (
              <button
                key={feature.step}
                type="button"
                onClick={() => select(index)}
                aria-current={isActive}
                className="group relative block w-full border-b border-rule py-7 text-left"
              >
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 md:gap-10">
                  <span
                    className={cn(
                      "type-meta pt-1 transition-colors",
                      isActive ? "text-asa-blue" : "text-muted-foreground",
                    )}
                  >
                    {feature.step}
                  </span>
                  <div className="min-w-0">
                    <span
                      className={cn(
                        "type-h3 block transition-colors",
                        isActive ? "text-asa-blue" : "group-hover:text-asa-blue",
                      )}
                    >
                      {feature.title || feature.step}
                    </span>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="type-lead mt-4 max-w-[48ch] text-muted-foreground">{feature.content}</p>
                          {feature.items ? (
                            <ul className="mt-6 grid gap-0 border-t border-rule sm:grid-cols-2">
                              {feature.items.map((item) => (
                                <li key={item} className="type-meta border-b border-rule py-2.5 text-muted-foreground">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <span className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
                  <span
                    className="block h-px bg-asa-blue transition-[width] duration-100 ease-linear"
                    style={{ width: isActive ? `${progress}%` : "0%" }}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <div className={cn("relative order-1 overflow-hidden bg-muted lg:order-2 lg:sticky lg:top-28", imageHeight)}>
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.step}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img src={active.image} alt={active.title || active.step} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-navy-deep/25" />
                <span className="type-label absolute bottom-6 left-6 text-white">{active.step}</span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
