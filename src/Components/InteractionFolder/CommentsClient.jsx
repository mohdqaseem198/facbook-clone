"use client";

import { useState } from "react";

const CommentsClient = ({ comments }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleComments = showAll
    ? comments
    : comments.slice(0, 3);

  return (
    <div className="space-y-2">
      {visibleComments.map((single) => (
        <div
          key={single.id}
          className="bg-gray-200 flex gap-2 px-2 py-1 rounded"
        >
          <div className="font-bold">
            {single.user?.username}
          </div>
          <div>{single.desc}</div>
        </div>
      ))}

      {comments.length > 3 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="text-sm cursor-pointer text-blue-500 hover:underline"
        >
          + more
        </button>
      )}
    </div>
  );
};

export default CommentsClient;