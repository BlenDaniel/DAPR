interface MainScreenViewModel {
  loading: boolean;
  fetchProjects: () => void;
  fetchProjectDetails: (id: string) => void;
}

export default function useMainScreenViewModel(): MainScreenViewModel {
  return {
    loading: false,
    fetchProjects: function (): void {
      throw new Error("Function not implemented.");
    },
    fetchProjectDetails: function (id: string): void {
      throw new Error("Function not implemented." + id);
    },
  };
}
