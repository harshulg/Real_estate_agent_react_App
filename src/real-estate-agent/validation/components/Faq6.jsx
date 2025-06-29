"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Get answers to common questions about our validation process and
            requirements.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <Card>
            <AccordionItem value="item-0" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                What is validation?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Validation is the process of verifying the information provided
                during registration. It ensures that all necessary documents are
                accurate and complete. This step is crucial for maintaining the
                integrity of our platform.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                How long does it take?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                The validation process typically takes 1-3 business days.
                However, it may vary depending on the volume of applications. We
                recommend checking your email for updates during this period.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                What documents are needed?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Required documents include a valid ID, proof of address, and any
                business registration documents if applicable. Ensure all
                documents are clear and legible. Incomplete submissions may
                delay the validation process.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                Can I expedite validation?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Currently, we do not offer an expedited validation process. We
                strive to process all applications as quickly as possible. Your
                patience is appreciated during this time.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                Who to contact?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                For any questions regarding validation, please reach out to our
                support team. You can contact us via the 'Contact' button above.
                We're here to assist you!
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
      </div>
    </section>
  );
}
