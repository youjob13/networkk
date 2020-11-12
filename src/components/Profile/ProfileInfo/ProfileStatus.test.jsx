import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="ass" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("ass");
  });
  test("span enable", () => {
    const component = create(<ProfileStatus status="ass" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("input enable", () => {
    const component = create(<ProfileStatus status="ass" />);
    const root = component.root;
    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });
  test("span text", () => {
    const component = create(<ProfileStatus status="ass" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("ass");
  });
  test("input should be displayed in editMode", () => {
    const component = create(<ProfileStatus status="ass" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("ass");
  });
  test("callback should be called", () => {
    const component = create(<ProfileStatus updateStatus={() => {}} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(input.props.value).toBe("ass");
  });
});
