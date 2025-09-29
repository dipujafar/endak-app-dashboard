import { Button, ConfigProvider, Form, Input, Modal, Upload } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  title?: string;
};

const AddCategory = ({ open, setOpen, title }: TPropsType) => {
  const [form] = Form.useForm();

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = (values) => {
    console.log("Success:", values);
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        closeIcon={false}
        style={{
          minWidth: "max-content",
        }}
      >
        <div className="py-14">
          <div
            className="w-10 h-10 bg-red-500  absolute top-2 right-2 rounded-full cursor-pointer flex justify-center items-center"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine size={18} color="#fff" />
          </div>

          {/* header */}

          <h4 className=" text-2xl font-medium text-center">{title}</h4>

          {/* form */}
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorText: "#000",
                  colorTextPlaceholder: "#808080",
                },
                Form: {
                  labelColor: "#var(--color-primary-gray)",
                  labelFontSize: 14,
                },
              },
            }}
          >
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              style={{
                maxWidth: 500,
                marginTop: "25px",
              }}
            >
              {/*  input  service Name*/}
              <Form.Item
                label="Service Name"
                name="serviceName"
                rules={[{ required: true, message: "Enter category name" }]}
              >
                <Input size="large" placeholder="Enter category name" />
              </Form.Item>

              {/*  input  service Name*/}
              <Form.Item
                label="Service Name (Arabic)"
                name="serviceNameArabic"
                rules={[{ required: true, message: "Enter category name" }]}
              >
                <Input
                  size="large"
                  placeholder="Enter category name for Arabic"
                  dir="rtl"
                />
              </Form.Item>

              {/* input  service Image  */}
              <Form.Item
                label="Upload Service Image"
                name="serviceImage"
                rules={[{ required: true, message: "Category Image" }]}
              >
                <Upload
                  maxCount={1}
                  listType="picture"
                  beforeUpload={() => false}
                >
                  <Button className="!border-none">Upload</Button>
                </Upload>
              </Form.Item>

              <Button
                htmlType="submit"
                size="large"
                block
                className="!border-none"
              >
                Submit
              </Button>
            </Form>
          </ConfigProvider>
        </div>
      </Modal>
    </>
  );
};

export default AddCategory;
