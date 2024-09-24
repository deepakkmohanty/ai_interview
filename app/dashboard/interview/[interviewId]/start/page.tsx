"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_compoents/QuestionsSection";
import RecoedAnsSection from "./_compoents/RecoedAnsSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState([]);
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    console.log(params.interviewId);
    getInterviewDetail();
  }, []);

  const getInterviewDetail = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      console.log("Raw result:", result);

      if (result.length > 0 && result[0].jsonMockResponse) {
        try {
          const jsonMockRes = JSON.parse(result[0].jsonMockResponse);
          console.log("Parsed JSON:", jsonMockRes);
          setMockInterviewQuestions(jsonMockRes);
          setInterviewData(result[0]);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          console.log("Invalid JSON string:", result[0].jsonMockResponse);
          // Handle the parsing error (e.g., set an error state, show a user message)
        }
      } else {
        console.log("No interview data found or jsonMockResponse is empty");
        // Handle the case where no data is found
      }
    } catch (dbError) {
      console.error("Database query error:", dbError);
      // Handle the database query error
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* question */}
        <QuestionsSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
        />

        {/* video/audio */}
        <RecoedAnsSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex != mockInterviewQuestions?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex == mockInterviewQuestions?.length - 1 && (
          <Link
            href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
          >
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
