// components/TrackingTimeline.jsx
import React from "react";

const TrackingTimeline = ({ events }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Tracking History
      </h2>
      <div className="flow-root">
        <ul className="-mb-8">
          {events.map((event, eventIdx) => (
            <li key={eventIdx}>
              <div className="relative pb-8">
                {eventIdx !== events.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center ring-8 ring-white">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-800 font-medium">
                        {event.status}
                      </p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                      {event.date}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackingTimeline;
