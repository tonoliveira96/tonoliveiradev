export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

type GAEventsProps = {
  action: string,
  category: string,
  label: string,
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label }: GAEventsProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};
