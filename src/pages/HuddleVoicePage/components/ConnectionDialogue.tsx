import React, { useEffect, useState } from "react";

import { useRoom } from "@huddle01/react/hooks";
import useToast from "../../../hooks/useToast";
import { useAccount } from "wagmi";
import { twMerge } from "tailwind-merge";
import { formatAddress } from "../../../utils";
import api from "../../../utils/api";
import DisplayPicture from "../../../common/DisplayPicture";
import UsernameWrapper from "../../../common/UsernameWrapper";

interface ConnectionDialogueProps {
  className?: string;
  roomId: string;
  startCall: () => void;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export default function ConnectionDialogue(props: ConnectionDialogueProps) {
  const { address } = useAccount();

  const avatarUrl = "https://wojak-studio.com/res/bases/happy_smug.png";

  const [isJoining, setIsJoining] = useState(false);
  const toast = useToast();
  const { joinRoom, state } = useRoom();

  async function handleStartSpaces() {
    setIsJoining(true);

    if (!address) return;

    let token = "";
    if (state !== "connected") {
      token = await api.huddle.getToken(props.roomId, address);
      props.setToken(token);
    }

    if (!address) {
      toast.error({
        title:
          "Something went wrong with your wallet connection, please try again!",
      });
      return;
    } else {
      await joinRoom({
        roomId: props.roomId,
        token,
      });
    }
    setIsJoining(false);
  }

  useEffect(() => {
    if (state === "connected") {
      props.startCall();
    }
  }, [state]);

  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-y-4 text-center",
        props.className
      )}
    >
      {address && <DisplayPicture address={address} className="w-[5vw]" />}
      <p className="text-start pl-4">
        Joining as
        <span className="font-light text-sm text-pink-300">
          {<UsernameWrapper>{address}</UsernameWrapper>}
        </span>
      </p>
      <button
        className="bg-primary text-back font-medium px-6 py-2 rounded-md whitespace-nowrap"
        onClick={handleStartSpaces}
        disabled={isJoining}
      >
        {isJoining ? "Joining Voice channel..." : "Join Voice Channel"}
      </button>
    </div>
  );
}
