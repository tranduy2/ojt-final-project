import { Button, Divider, Dropdown, Image, Input, MenuProps, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useAuthenticationTypes, thirdMethod } from '../constants/register';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import MockupIC from '../assets/images/mockupIp.png';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const authenticationType = useAuthenticationTypes();

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
      label: 'Tiếng Việt',
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
        <div className="hidden md:block absolute top-6 left-8 text-3xl font-medium">
          {t('common.text.signUpToPayment')}
        </div>
        <div className="hidden md:block absolute top-[90px] left-8 text-sm font-light text-[#4F555A] max-w-[300px]">
          {t('common.text.account')}{' '}
          <Link to="/sign-in" className="text-[#56B280] font-semibold underline">
            {t('common.text.signInHere')}
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-end w-full gap-6 p-4">
          <Dropdown menu={{ items }} trigger={['click']}>
            <Space>
              {currentLanguage === 'en' ? 'English' : 'Tiếng Việt'}
              <DownOutlined />
            </Space>
          </Dropdown>
          {authenticationType.map((item) => (
            <Link
              key={item.value}
              to={item.path}
              className={`text-sm text-[#56B280] font-semibold px-4 py-2 bg-white shadow-lg rounded-2xl ${
                location.pathname === item.path ? 'border-b-2 border-[#56B280]' : ''
              }`}
            >
              {' '}
              {item.text}
            </Link>
          ))}
          <Button className="bg-[#56B280]  px-4 py-2" type="primary">
            <Link to="/home">{t('common.button.home')}</Link>
          </Button>
        </div>

        <div className="flex flex-col gap-3 flex-grow justify-center">
          <div className="md:hidden text-center mb-4 text-3xl font-medium">
            {' '}
            {t('common.text.signUpToPayment')}{' '}
          </div>
          <div className="md:hidden text-center mb-4 text-sm font-light text-[#4F555A]">
            {t('common.text.account')}{' '}
            <Link to="/sign-in" className=" text-[#56B280] font-semibold underline">
              {t('common.text.signInHere')}
            </Link>
          </div>

          <Input
            className="bg-[#EAF0F7] border-none p-2 color-[#4F555A]"
            placeholder={t('common.text.enterName')}
            allowClear
          />
          <Input
            className="bg-[#EAF0F7] border-none p-2 color-[#4F555A]"
            placeholder={t('common.text.enterPhone')}
            allowClear
          />
          <Input
            className="bg-[#EAF0F7] border-none p-2 color-[#4F555A]"
            placeholder={t('common.text.enterEmail')}
            allowClear
          />
          <Input.Password
            className="bg-[#EAF0F7] border-none p-2 color-[#4F555A]"
            placeholder={t('common.text.enterPassword')}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Button className="py-4 bg-[#56B280] font-semibold" type="primary">
            {t('common.button.signUp')}
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

export default Register;
