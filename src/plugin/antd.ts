import Vue from 'vue';
import {
  Button,
  Icon,
  // Avatar,
  Row, Col, Carousel,
  Skeleton, List, Card,
  Modal, Slider, Popover,
  Pagination, Tabs, Table,
  Divider, Drawer, Tag, Select,
  Input, Form, Collapse, Progress,
  Radio, Spin,
} from 'ant-design-vue';
import Avatar from './components/Avatar.vue';
const IconFont: any = Icon.createFromIconfontCN({
  // scriptUrl: '//at.alicdn.com/t/font_1272441_0etur92r3rbs.js',
  // scriptUrl: '//at.alicdn.com/t/font_1272441_030a7grz1th2.js',
  scriptUrl: 'https://at.alicdn.com/t/font_1272441_wqmr9itup3j.js',
  // scriptUrl: 'icon.js',
});


Vue.component(IconFont.name, IconFont);
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
// Vue.component(Avatar.name, Avatar);
Vue.component('AAvatar', Avatar);
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
Vue.component(Select.name, Select);
Vue.component(Select.Option.name, Select.Option);
Vue.component(Input.name, Input);
Vue.component(Input.Group.name, Input.Group);
Vue.component(Input.TextArea.name, Input.TextArea);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Collapse.name, Collapse);
Vue.component(Collapse.Panel.name, Collapse.Panel);
Vue.component(Progress.name, Progress);
Vue.component(Radio.Group.name, Radio.Group);
Vue.component(Radio.Button.name, Radio.Button);
Vue.component(Radio.name, Radio);
Vue.component(Spin.name, Spin);




