"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to common questions about navigating and using the
            dashboard effectively.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I post?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To post, navigate to the 'Post Now' section on your dashboard.
              Select the type of post you want to create—property, requirement,
              project, event, or news. Fill in the required details and hit
              'Submit' to share with your network.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is my feed?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Your feed displays a curated selection of posts based on your
              interests and connections. It includes updates from users you
              follow, as well as relevant properties and events. You can filter
              the feed to see specific types of content.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I edit posts?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can edit your posts by clicking on the 'Edit' option next
              to the post. Make the necessary changes and save to update the
              content. Remember, changes will be visible to your audience
              immediately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I search?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Use the global search bar located at the top of your dashboard.
              Enter keywords related to properties, users, or posts to find what
              you need. You can also apply filters to narrow down your search
              results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What are notifications?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Notifications keep you updated on important activities related to
              your account. This includes alerts for new matches, messages, and
              interactions with your posts. You can manage your notification
              settings in the dashboard.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            We're here to help you with any inquiries.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
