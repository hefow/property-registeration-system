export default function useApi() {
  const request = async (input: RequestInfo, init?: RequestInit) => {
    return fetch(input, init);
  };

  return { request };
}
