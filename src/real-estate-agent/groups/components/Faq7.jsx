"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your most common questions about using groups
            effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I join?
            </h2>
            <p>
              To join a group, simply search for the group name in the search
              bar. Once you find it, click on the 'Join' button. You may need to
              wait for approval from the group admin.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I create groups?
            </h2>
            <p>
              Yes, you can create your own groups. Navigate to the 'Groups'
              section and click on 'Create Group.' Fill out the necessary
              details and submit for approval.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are group roles?
            </h2>
            <p>
              Group roles determine the permissions of members. Roles include
              Admin, Manager, Editor, and Viewer, each with different levels of
              access and capabilities. Admins have the highest level of control.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How to leave a group?
            </h2>
            <p>
              To leave a group, go to the group's page and click on the 'Leave
              Group' option. Confirm your decision, and you will be removed from
              the group. You can rejoin at any time if you wish.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I report issues?
            </h2>
            <p>
              Absolutely! If you encounter any issues, you can report them
              directly within the group. Use the 'Report' feature to notify
              admins or support for assistance.
            </p>
          </div>
        </div>
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
