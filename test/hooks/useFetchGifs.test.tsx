import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe("useFetch hook tests", () => {
  it("should properly fetch data", async () => {
    const term = 'vegeta'
    const { result } = renderHook(() => useFetchGifs({term}));
    waitFor(() => console.log(result.current))
  
    //expect(result.current).toEqual(users);
  });
});