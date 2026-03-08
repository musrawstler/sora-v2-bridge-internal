// Internal Hook for Sora V2 API Polling
import axios from 'axios';

export const useSoraApi = (apiKey) => {
  const generateVideo = async (prompt) => {
    // 1. Submit the prompt to the Sora endpoint
    const response = await axios.post('/v1/video/generations', { prompt });
    const { jobId } = response.data;

    // 2. Start Polling (Sora doesn't return video instantly)
    return pollStatus(jobId);
  };

  const pollStatus = async (id) => {
    console.log(`[SORA] Checking status for Job: ${id}`);
    // Loop until status is 'completed'
  };

  return { generateVideo };
};
