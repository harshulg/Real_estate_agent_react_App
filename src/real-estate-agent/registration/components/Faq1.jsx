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
            Find answers to your registration questions and get started with
            WISHKE.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I register?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To register, click on the 'Sign Up' button on the homepage. Follow
              the prompts to enter your details and choose your account type.
              You'll receive a confirmation email to verify your account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What information is needed?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You will need to provide your name, email address, and a password.
              If registering as a business, additional documentation will be
              required. Ensure all information is accurate to avoid delays.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I change details?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can update your profile information at any time. Simply
              navigate to your account settings. If you need to change your
              email or password, follow the prompts provided.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I forget?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you forget your password, click on the 'Forgot Password?' link
              on the login page. Follow the instructions sent to your email to
              reset it. Make sure to check your spam folder if you don't see the
              email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is registration free?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, registration on WISHKE is completely free. You can create an
              account without any charges. Enjoy all the features available to
              registered users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
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
