import { create } from "zustand";

interface TeamState {
  search: string;
  team: string;
  status: string;
  page: number;
  pageSize: number;
  setSearch: (value: string) => void; // Action Funcations
  setTeam: (value: string) => void;
  setStatus: (value: string) => void;
  setPage: (value: number) => void;
  clearFilters: () => void;

}


export const useTeamStore = create<TeamState>((set) => ({
  search: "",
  team: "",
  status: "",
  page: 1,
  pageSize: 4,
  setSearch: (value) => set({ search: value, page: 1 }),
  setTeam: (value) => set({ team: value, page: 1 }),
  setStatus: (value) => set({ status: value, page: 1 }),
  setPage: (value) => set({ page: value }),
  clearFilters: () => set({ search: "", team: "", status: "", page: 1 }),
}));
