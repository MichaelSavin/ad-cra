import React from 'react';
import { Form, Select, Input, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import { Formik } from 'formik';
import './App.css';

const { Option } = Select;

const App = () => (
  <Form style={{ marginTop: 32 }}>
    <Form.Item
      label="Сколько запустить ракет?"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <InputNumber min={1} max={10} defaultValue={3} />
      <span className="ant-form-text">или переключиться на план</span>
      <a href="https://ant.design">Б</a>
    </Form.Item>

    <Form.Item
      label="Запуск разрешен"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <Switch defaultChecked />
    </Form.Item>

    <Form.Item
      label="Заправить топливом"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <Slider defaultValue={70} />
    </Form.Item>

    <Form.Item
      label="Командир"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <Select defaultValue="lucy" style={{ width: 192 }}>
        <Option value="jack">Лёша</Option>
        <Option value="lucy">Люся</Option>
        <Option value="disabled" disabled>выбыл</Option>
        <Option value="yiminghe">Сан Саныч</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="Дата запуска"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <DatePicker />
    </Form.Item>

    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Обязательно';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Почтовый адрес не распознан!';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
    }) => (
      <form onSubmit={handleSubmit}>
        <Form.Item
          label="e-mail"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
        </Form.Item>
        <Form.Item
          label="password"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
        </Form.Item>
      </form>
      )}
    </Formik>

    <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Подтвердить полномочия
      </Button>
      <Button style={{ marginLeft: 8 }}>
        Отмена
      </Button>
    </Form.Item>
  </Form>
);

export default App;
