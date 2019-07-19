import Vue from 'vue';
import {
  Button,
  Icon, Avatar,
  Row, Col, Carousel,
  Skeleton, List, Card,
  Modal, Slider, Popover,
  Pagination, Tabs, Table,
  Divider, Drawer, Tag,
} from 'ant-design-vue';

const IconFont: any = Icon.createFromIconfontCN({
  // scriptUrl: '//at.alicdn.com/t/font_1272441_0etur92r3rbs.js',
  // scriptUrl: '//at.alicdn.com/t/font_1272441_030a7grz1th2.js',
  // scriptUrl: '//at.alicdn.com/t/font_1272441_evj5r6r4oe7.js',
  scriptUrl: '//at.alicdn.com/t/font_1272441_ru8i3hxus4j.js',
});
Vue.component(IconFont.name, IconFont);
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(Avatar.name, Avatar);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Carousel.name, Carousel);
Vue.component(Skeleton.name, Skeleton);
Vue.component(List.name, List);
Vue.component(Card.name, Card);
Vue.component(Modal.name, Modal);
Vue.component(Slider.name, Slider);
Vue.component(Popover.name, Popover);
Vue.component(Pagination.name, Pagination);
Vue.component(Tabs.name, Tabs);
Vue.component(Tabs.TabPane.name, Tabs.TabPane);
Vue.component(Table.name, Table);
Vue.component(Divider.name, Divider);
Vue.component(Drawer.name, Drawer);
Vue.component(Tag.name, Tag);
Vue.component(Tag.CheckableTag.name, Tag.CheckableTag);

