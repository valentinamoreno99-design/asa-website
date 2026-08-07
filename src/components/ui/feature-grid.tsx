"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface FeatureGridItem {
  num: string;
  title: string;
  body: string;
  risk?: string;
  response?: string;
  image?: string;
  icon: LucideIcon;
}

export function FeatureGrid({ items }: { items: FeatureGridItem[] }) {
  return (
    <div className="grid gap-px border border-rule bg-rule md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.num}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative isolate flex flex-col overflow-hidden bg-background p-8 md:p-10"
          >
            {item.image ? (
              <img
                src={item.image}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-0 grayscale transition-opacity duration-700 group-hover:opacity-15"
              />
            ) : null}

            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center border border-rule text-asa-blue transition-colors duration-500 group-hover:border-asa-blue group-hover:bg-asa-blue group-hover:text-primary-foreground">
                <Icon size={18} strokeWidth={1.6} />
              </span>
              <span className="type-meta text-muted-foreground">{item.num}</span>
            </div>

            <h3 className="type-h3 mt-10 max-w-[18ch]">{item.title}</h3>
            <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">{item.body}</p>

            <div className="mt-8 grid gap-4 border-t border-rule pt-6">
              {item.risk ? (
                <div>
                  <p className="type-label text-muted-foreground/70">At risk</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.risk}</p>
                </div>
              ) : null}
              {item.response ? (
                <div>
                  <p className="type-label text-asa-blue">ASA response</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.response}</p>
                </div>
              ) : null}
            </div>

            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-asa-blue transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
          </motion.article>
        );
      })}
    </div>
  );
}
