"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { MockInterview } from "@/utils/schema";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Webcam from "react-webcam";
interface InterviewParams {
  interviewId: string;
}

function Interview({ params }: { params: InterviewParams }) {
  const [interviewData, setInterviewData] = useState([]);
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  useEffect(() => {
    console.log(params.interviewId);
    getInterviewDetail();
  }, []);
  const getInterviewDetail = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    if (result.length > 0) {
      setInterviewData(result[0]);
    }
  };
  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's get started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col p-4 rounded-lg border gap-5">
            <h2 className="text-lg">
              <strong>Job Role/Job Description: </strong>
              {interviewData.jobPositions}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description/Tech stack: </strong>
              {interviewData.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Year of Experience: </strong>
              {interviewData.jobExp}
            </h2>
          </div>
          <div className="p-4 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex items-center gap-2 text-yellow-500">
              <Lightbulb />
              <strong>Infromation</strong>
            </h2>
            <h2 className="mt-3 text-yellow-500">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <Webcam
              mirrored={true}
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              style={{ height: 300, width: 300 }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 bg-secondary p-20 rounded-lg border" />
              <Button
                variant="ghost"
                onClick={() => setWebCamEnabled(true)}
                className="w-full font-bold"
              >
                Enable Web cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex items-end justify-end mt-10">
        <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
