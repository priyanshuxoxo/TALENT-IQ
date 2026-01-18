import { useQuery, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/session";

export const useCreateSession = () => {
  return useMutation({
    mutationKey: ["createSession"],
    mutationFn: sessionApi.createSession,

    onSuccess: (data) => {
      toast.success("Session created successfully");

      if (!data || !data._id || !data.callId) {
        console.error("Invalid session response:", data);
        toast.error("Session creation failed. Please login again.");
      }
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to create session");
    },
  });
};

export const useActiveSessions = () => {
  const result = useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });
  return result;
};
export const useMyRecentSessions = () => {
  const result = useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });
  return result;
};
export const useSessionById = (id) => {
  const result = useQuery({
    queryKey: [`session ${id}`],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000, //refect every 5 seconds to get updated session info
  });
  return result;
};

export const useJoinSession = () => {
  return useMutation({
    mutationKey: ["joinSession"],
    mutationFn: (id) => sessionApi.joinSession(id),
    onSuccess: () => {
      toast.success("Joined session successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to join session");
    },
  });
};
export const useEndSession = () => {
  return useMutation({
    mutationKey: ["endSession"],
    mutationFn: (id) => sessionApi.endSession(id),
    onSuccess: () => {
      toast.success("Ended session successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to end session");
    },
  });
};
