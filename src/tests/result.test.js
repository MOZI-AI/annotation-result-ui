import React from "react";
import { AnalysisStatus } from "../utils";
import { Result } from "../components/result";
import { shallow, mount } from "enzyme";

describe("<Result>", () => {
  it("shows download button if analysis completes successfully", () => {
    const progressProps = {
      progress: 100,
      status: AnalysisStatus.COMPLETED,
      start: 1318781876406,
      end: 13187848764606,
      message: null,
      downloadResult: null,
      expirationTime: 1
    };

    const wrapper = shallow(<Result {...progressProps} />);
    expect(wrapper.find("Button#downloadAnalysisResult").exists()).toBeTruthy();
  });

  it("shows error if analysis fails", () => {
    const progressProps = {
      progress: 12,
      status: AnalysisStatus.ERROR,
      start: 1318781876406,
      end: 13187848764606,
      message: "Error message",
      downloadResult: null,
      expirationTime: 1
    };

    const wrapper = shallow(<Result {...progressProps} />);
    expect(wrapper.find("Alert#errorMessage").exists()).toBeTruthy();
  });

  it("shows 'link will expire' notice", () => {
    const progressProps = {
      progress: 100,
      status: AnalysisStatus.COMPLETED,
      start: 1318781876406,
      end: 13187848764606,
      message: null,
      downloadResult: null,
      expirationTime: 1
    };

    const wrapper = shallow(<Result {...progressProps} />);
    expect(wrapper.find("Alert#willExpireNotice").exists()).toBeTruthy();
  });

  it("shows 'link did expire' notice", () => {
    const progressProps = {
      progress: 100,
      status: AnalysisStatus.COMPLETED,
      start: 1318781876406,
      end: 13187848764606,
      message: null,
      downloadResult: null,
      expirationTime: 0
    };

    const wrapper = shallow(<Result {...progressProps} />);
    expect(wrapper.find("Alert#didExpireNotice").exists()).toBeTruthy();
  });
});
