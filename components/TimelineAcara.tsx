"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import CelebrationIcon from "@mui/icons-material/Celebration";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function TimelineAcara() {
  return (
    <Timeline position="alternate">
      {/* Registrasi */}
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} color="text.secondary">
          09.00 WIB
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#D4AF37", color: "#fff" }}>
            <CelebrationIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <div className="rounded-xl bg-neutral-100 p-4 shadow-sm w-fit">
            <Typography variant="h6">Registrasi & Pembukaan</Typography>
            <Typography variant="body2">
              Pembagian ID Card, coffee & snack pembuka.
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* Sambutan */}
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} color="text.secondary">
          10.00 WIB
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#D4AF37", color: "#fff" }}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <div className="ml-auto rounded-xl bg-neutral-100 p-4 shadow-sm w-fit">
            <Typography variant="h6">Sambutan</Typography>
            <Typography variant="body2">
              Sambutan dari ketua panitia dan pihak sekolah.
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* Games */}
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} color="text.secondary">
          11.30 WIB
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#D4AF37", color: "#fff" }}>
            <SportsEsportsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <div className="rounded-xl bg-neutral-100 p-4 shadow-sm w-fit">
            <Typography variant="h6">Games & Nostalgia</Typography>
            <Typography variant="body2">
              Ice breaking dan cerita masa sekolah.
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* ISHOMA */}
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} color="text.secondary">
          12.30 WIB
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#D4AF37", color: "#fff" }}>
            <RestaurantIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <div className="ml-auto rounded-xl bg-neutral-100 p-4 shadow-sm w-fit">
            <Typography variant="h6">ISHOMA</Typography>
            <Typography variant="body2">
              Istirahat, sholat, dan makan siang.
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* Foto */}
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} color="text.secondary">
          14.00 WIB
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#D4AF37", color: "#fff" }}>
            <CameraAltIcon />
          </TimelineDot>
        </TimelineSeparator>

        <TimelineContent>
          <div className="rounded-xl bg-neutral-100 p-4 shadow-sm w-fit">
            <Typography variant="h6">Foto & Penutupan</Typography>
            <Typography variant="body2">
              Dokumentasi dan foto bersama seluruh alumni.
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
