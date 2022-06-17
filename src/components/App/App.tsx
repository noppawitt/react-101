import { NewsProvider } from '@/contexts/NewsContext';
import { Outlet, Route, Routes } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import NewsAdd from '../NewsAdd';
import NewsContent from '../NewsContent';
import NewsEdit from '../NewsEdit';
import NewsList from '../NewsList';
import './style.css';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Breadcrumbs />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const data = [
  {
    content: {
      th: 'โทรโข่ง อพาร์ตเมนต์อีสเตอร์เปเปอร์สุริยยาตร์คอลัมน์ วิทย์เลิฟเทปแยมโรล มั้ย เลิฟจิตเภทสแตนเลสอันเดอร์แอโรบิค แมชีน ฮ็อตด็อกโลโก้แลนด์ติ๋มช็อต เมคอัพสเกตช์ริคเตอร์พูล สตรอเบอร์รีป๊อปคอนโทรลโกลด์ ควีนเมาท์ ควีนพรีเมียร์สตูดิโอ ฮัมแต๋วแฟลชนอร์ทแอ็กชั่น กรุ๊ปทรูรีพอร์ท ฮองเฮาอึ๋มโทรโข่ง ชิฟฟอน ธุรกรรมสะบึมฮัลโลวีนภูมิทัศน์คันธาระ',
      en: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    coverImage: 'https://source.unsplash.com/random/?news&sig=1',
    category: 'news',
    updatedAt: '2022-06-06T09:00',
  },
  {
    content: {
      th: 'รวมมิตรสจ๊วตทัวร์นาเมนท์โยโย่ มาร์ตซีดานโมจิ เฝอมาราธอนติงต๊อง บอยคอตวานิลาซูโม่ แรลลีสเกตช์แจ็กเก็ตบุ๋นคลาสสิก กุนซือแฟ็กซ์ความหมายธัมโมออร์แกน แรลลีช็อคออดิทอเรียมคอลัมน์ติงต๊อง สเปคฟลุตฟีดสะบึมส์เอ๊าะ เทคโนคูลเลอร์พาเหรดเซนเซอร์ฟรุต เบอร์เกอร์เทเลกราฟวานิลาทัวร์โปร ด็อกเตอร์ มุมมองแคนยอน มั้ยเซาท์อัลไซเมอร์ไลน์ ชินบัญชรจตุคามแกรนด์ชาร์ต รากหญ้าไฮไลต์แต๋วดีพาร์ตเมนต์มวลชน บุ๋นฮองเฮารีสอร์ตโปร',
      en: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    coverImage: 'https://source.unsplash.com/random/?news&sig=2',
    category: 'news',
    updatedAt: '2022-06-06T09:00',
  },
  {
    content: {
      th: 'แพทเทิร์นมาร์เก็ตติ้งเห็นด้วยเพนตากอนกรีน รีสอร์ทอินดอร์ พาร์โทรแคป สหัชญาณโยเกิร์ตเบบี้ ฟาสต์ฟู้ด คอนโดมิเนียมง่าว ไชน่า ดีกรีไฮกุตรวจทาน บร็อกโคลีโปรเจ็กเตอร์ รีสอร์ทอันตรกิริยาลาเต้ตุ๊ด รีโมทโบกี้สปา บอมบ์ติวเตอร์สเปก โซน ออร์แกนิกเธคบึ้มดีพาร์ทเมนต์ เซนเซอร์ราเมนเซ็กส์ นายพรานวานิลลาเพรียวบางสตาร์เจล',
      en: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    coverImage: 'https://source.unsplash.com/random/?news&sig=3',
    category: 'news',
    updatedAt: '2022-06-06T09:00',
  },
  {
    content: {
      th: 'หมั่นโถว แจ็กพ็อตสโตนมาร์จินโฟม อินเตอร์ เอนทรานซ์ออกแบบรีสอร์ทโปรโมชั่นไหร่ เย้วบาร์บีคิว แอปพริคอทเรตติ้งไอติมฮิปฮอปออร์แกนิก แล็บคอนเทนเนอร์เตี๊ยมดิกชันนารีลิสต์ อิเหนาสลัม ซิ่งเจไดดั๊มพ์ เกรด นิว เกย์จิตเภทคอนโดฮัลโลวีนแฟ็กซ์ แบล็คเซอร์ไพรส์คอรัปชั่นหลวงปู่เอ็กซ์เพรส ต่อยอด โปรเจคท์ ไฮเอนด์',
      en: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    coverImage: 'https://source.unsplash.com/random/?news&sig=4',
    category: 'announcement',
    updatedAt: '2022-06-06T09:00',
  },
];

const App = () => {
  return (
    <NewsProvider data={[...data, ...data, ...data]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/add" element={<NewsAdd />} />
          <Route path="news/:id" element={<NewsContent />} />
          <Route path="news/:id/edit" element={<NewsEdit />} />
        </Route>
      </Routes>
    </NewsProvider>
  );
};

export default App;
