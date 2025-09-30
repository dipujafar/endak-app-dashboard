"use client";
import { Label } from "@/components/ui/label";
import { Button } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CustomerAgreement = () => {
  const [value, setValue] = useState(
    "<h2>Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor.</h2><p><br/></p><p><br/></p><h2>Education also nurtures empathy and cultural awareness, fostering a more inclusive and understanding society. By learning about diverse perspectives and histories, we become more open-minded and respectful of differences, which is crucial in a world that is increasingly interconnected. This cultural competence not only enhances personal relationships but also strengthens international collaboration and peace.....</h2>"
  );
  const [valueArabic, setValueArabic] = useState("");

  const toolbarOptions = [
    ["image"],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
  ];

  const moduleConest = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      <h4 className="text-2xl font-medium text-text-color">
        Agreement Content
      </h4>

      <div className="border  border-black rounded mt-5">
        <Label className="text-text-color p-2 text-2xl">English</Label>
        <ReactQuill
          modules={moduleConest}
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Start writing ......"
          className="agreement-editor"
          style={{
            border: "1px solid #EFE8FD",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="border  border-black rounded mt-5">
        <Label className="text-text-color p-2 text-2xl">Arabic</Label>
        <ReactQuill
          modules={moduleConest}
          theme="snow"
          value={valueArabic}
          onChange={setValueArabic}
          className="agreement-editor agreement-editor-arabic "
          placeholder="ابدأ بالكتابة......"
          style={{
            border: "1px solid #EFE8FD",
            marginTop: "20px",
            borderRadius: "10px",
            direction: "rtl",
          }}
        />
      </div>
      <Button
        size="large"
        block
        style={{
          marginTop: "20px",
          border: "none",
        }}
      >
        Save Changes
      </Button>
    </>
  );
};

export default dynamic(() => Promise.resolve(CustomerAgreement), {
  ssr: false,
});
