import { create } from "zustand";

export const   useCurrentMainCode = create((set) => ({
  currentModel: null,
  setCurrentModel: (model) => set({ currentModel: model }),
  addValue: (value,model) => {

      const position = model.getPositionAt(model.getValue().length); // Get the end position
      const range = new window.monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column); // Create a range at the end
        model.pushEditOperations(null, [
          {
            range: range,
            text: value, // Add the desired text
            forceMoveMarkers: true,
          },
        ]);

        set({ currentModel: model });
  }
}));