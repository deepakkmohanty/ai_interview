import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function InterviewListCard({ interview }) {
  const router = useRouter();
  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-primary">{interview?.jobPositions}</h2>
      <h2 className="text-sm text-gray-600">
        {interview?.jobExp} Years of Experience
      </h2>
      <h2 className="text-xs text-gray-600">
        Created At: {interview.createdAt}
      </h2>
      <div className="flex mt-2 gap-3 justify-between">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={() =>
            router.replace(
              "/dashboard/interview/" + interview?.mockId + "/feedback"
            )
          }
        >
          Feedback
        </Button>
        <Button
          size="sm"
          className="w-full"
          onClick={() =>
            router.replace(
              "/dashboard/interview/" + interview?.mockId + "/start"
            )
          }
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewListCard;
