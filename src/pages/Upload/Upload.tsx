import { Input, Button, Form, Upload as AntUpload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Toolbar from "../../components/toolbar/toolbar";
import './Upload.css';

const { TextArea } = Input;

function Upload() {
  const beforeUpload = () => {
    return false;
  };

  return (
    <div className="upload-background">
      <h1>Upload Recipe</h1>
      <div className="upload-container">
        <Form layout="vertical">
          <Form.Item label="Recipe Title" name="recipeName" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Ingredients" name="ingredients" rules={[{ required: true }]}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Steps" name="steps" rules={[{ required: true }]}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Duration" name="duration" rules={[{ required: true }]}>
            <Input placeholder="e.g., 30 minutes" />
          </Form.Item>
          <Form.Item label="Upload Images" name="images">
            <AntUpload listType="picture-card" beforeUpload={beforeUpload} multiple>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </AntUpload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
      <Toolbar />
    </div>
  );
}

export default Upload;
