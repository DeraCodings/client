"use client";

import Script from "next/script";

function CalendlyComponent() {
//   const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
//   const showDetails: number =
//     process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS == "false" ? 1 : 0;
//   const showCookies: number =
//     process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES == "false" ? 1 : 0;
  return (
    <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/humphreychisco/coaching-session?hide_event_type_details=1"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
      {/* <div
        className="calendly-inline-widget w-screen h-screen"
        data-url={`https://calendly.com/${username}${
          type ? `/${type}` : ""
        }?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}
      ></div> */}
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </div>
  );
}

export default CalendlyComponent;
