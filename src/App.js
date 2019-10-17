import React from 'react';
import {Form, Select, Input, InputNumber, DatePicker, Switch, Slider, Button} from 'antd';
import {Formik} from 'formik';
import * as Yup from "yup";
import './App.css';

const {Option} = Select;

const App = () => (
    <Formik
        initialValues={{
            numberOfRockets: 3,
            isAllowed: true,
            email: '',
            password: '',
            defaultFuelingPercentage: 80,
        }}
        validationSchema={Yup.object({
            numberOfRockets: Yup.number()
                .min(1, "Минимум одна ракета")
                .max(10, "Максимум десять ракет")
                .required("Не отказывайте себе в удовольствии!"),
            isAllowed: Yup.boolean()
                .required("Ракеты должны улететь!")
                .oneOf([true], "Отключить не получится!"),
            email: Yup.string()
                .email("Это не похоже на e-mail адрес")
                .required("Подсказка: president@usa.com"),
            password: Yup.string()
                .min(8, "Минимум 8 символов, попробуйте 11111111")
                .required("Подсказка: 11111111"),
        })}
        onSubmit={(values, {setSubmitting}) => {
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
            <Form onSubmit={handleSubmit} style={{marginTop: 32}}>
                <Form.Item
                    label="Сколько запустить ракет?"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 8}}
                >
                    <InputNumber
                        name="numberOfRockets"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.numberOfRockets} //FIXME эта строка блокирует изменение количества, а без неё я не знаю как вернуть значение из формы ((
                    />
                    <span className="ant-form-text">или включить</span>
                    <a href="https://ant.design">План Б</a>
                    {errors.numberOfRockets && touched.numberOfRockets && errors.numberOfRockets}
                </Form.Item>

                <Form.Item
                    label="Запуск разрешен"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 8}}
                >
                    <Switch defaultChecked
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.isAllowed} //FIXME эта строка блокирует изменение флага, а без неё я не знаю как вернуть состояние флага
                    />
                </Form.Item>

                <Form.Item
                    label="Заправлено топлива"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 8}}
                >
                    <Slider
                        name="fuelingPercentage"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.defaultFuelingPercentage}
                    />
                </Form.Item>

                <Form.Item
                    label="Командир"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 8}}
                >
                    <Select defaultValue="lucy" style={{width: 192}}>
                        <Option value="jack">Лёша</Option>
                        <Option value="lucy">Люся</Option>
                        <Option value="disabled" disabled>выбыл</Option>
                        <Option value="yiminghe">Сан Саныч</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Дата запуска"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 8}}
                >
                    <DatePicker/>
                </Form.Item>

                <Form.Item
                    label="e-mail"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 8}}
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
                    label="Пароль"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 8}}
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

                <Form.Item wrapperCol={{span: 8, offset: 8}}>
                    <Button type="primary" htmlType="submit">
                        Подтвердить полномочия
                    </Button>
                    <Button style={{marginLeft: 8}}>
                        Отмена
                    </Button>
                </Form.Item>
            </Form>
        )}
    </Formik>
);

export default App;
