"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface CourseDetail {
  label: string;
  value: string | React.ReactNode;
}

export interface CourseSectionProps {
  title: string;
  details: CourseDetail[];
  imageSrc?: string;
  imageAlt?: string;
  fullContent?: React.ReactNode[];
  reverse?: boolean;     
  bookLabel?: string;   
   className?: string;  
}

export function CourseSection({
  title,
  details,
  imageSrc,
  imageAlt,
  fullContent,
  reverse = false,
  bookLabel = "BOOK",
  className = "",
}: CourseSectionProps) {
  return (
    <section className="first:mt-0 mt-16 space-y-8">
     <Card className={`${className} shadow-none border-none`}>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`flex flex-col ${
              reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-start gap-6`}
          >
            {imageSrc && (
              <div className="w-full md:w-1/2">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            )}
            <div className="w-full md:w-1/2 space-y-4">
              <ul className="list-disc list-inside space-y-2">
                {details.map(({ label, value }) => (
                  <li key={label}>
                    <span className="font-medium">{label}:</span> {value}
                  </li>
                ))}
              </ul>
              <Button>{bookLabel}</Button>
            </div>
          </div>

          {fullContent &&
            fullContent.map((block, i) => (
              <div key={i} className="prose max-w-none mt-8">
                {block}
              </div>
            ))}
        </CardContent>
      </Card>
    </section>
  );
}
