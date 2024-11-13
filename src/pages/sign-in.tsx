import { Button, Divider, Dropdown, Image, Input, MenuProps, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { authenticationType, thirdMethod } from '../constants/login';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import MockupIC from '../assets/images/mockupIp.png';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const SignIn = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const items: MenuProps['items'] = [
    {
      label: 'English',
      key: 'en',
      onClick: () => {
        setCurrentLanguage('en');
        i18n.changeLanguage('en');
      },
    },
    {
      label: 'Vietnamese',
      key: 'vi',
      onClick: () => {
        setCurrentLanguage('vi');
        i18n.changeLanguage('vi');
      },
    },
  ];

  return (
    <div className="flex flex-row h-screen w-screen justify-evenly p-4 md:p-12 bg-[#F6F6F6]">
      <div className="relative md:flex md:items-center md:justify-center hidden">
        <Image
          className="relative lg:max-w-[700px] md:max-w-[90%]"
          src={MockupIC}
          preview={false}
        />
        <div className="absolute top-6 left-8 text-3xl max-w-[230px] font-medium">
          Sign In to Recharge Direct
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-6 justify-center w-[350px]">
          <Dropdown menu={{ items }} trigger={['click']}>
            <Space>
              {currentLanguage === 'en' ? 'English' : 'Vietnamese'}
              <DownOutlined />
            </Space>
          </Dropdown>
          {authenticationType.map((item) => (
            <div className="flex items-center justify-center text-sm text-[#56B280] font-semibold px-3 py-1 bg-white shadow-lg rounded-2xl">
              {item.text}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 flex-grow justify-center">
          <Input
            className="bg-[#EAF0F7] border-none p-2 color-[#4F555A]"
            placeholder="Enter Email"
            allowClear
          />
          <Input.Password
            className="bg-[#EAF0F7] border-none p-2 color-[#4F555A]"
            placeholder="Enter Password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <div className="text-xs font-extralight text-[#C7C7C7] text-right">
            Recover Password ?
          </div>
          <Button className="py-4 bg-[#56B280] font-semibold" type="primary">
            {t('common.button.signIn')}
          </Button>
          <div>
            <div className="relative">
              <Divider />
            </div>
            <div className="grid grid-cols-3 gap-5">
              {thirdMethod.map((item) => (
                <div className="flex items-center justify-center rounded-md shadow-lg py-3">
                  <Image src={item.logo} width={16} height={16} preview={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
