import React from 'react'
import { useRoutes } from 'react-router-dom'

const SansMenu = React.lazy(() => import('../layouts/SansMenu'))
const SideMenu = React.lazy(() => import('../layouts/SideMenu'))
const SimpleMenu = React.lazy(() => import('../layouts/SimpleMenu'))
const TopMenu = React.lazy(() => import('../layouts/TopMenu'))
const Categories = React.lazy(() => import('../views/Categories'))
const AddProduct = React.lazy(() => import('../views/AddProduct'))
const ProductList = React.lazy(() => import('../views/ProductList'))
const ProductGrid = React.lazy(() => import('../views/ProductGrid'))
const TransactionList = React.lazy(() => import('../views/TransactionList'))
const TransactionDetail = React.lazy(() => import('../views/TransactionDetail'))
const SellerList = React.lazy(() => import('../views/SellerList'))
const SellerDetail = React.lazy(() => import('../views/SellerDetail'))
const Reviews = React.lazy(() => import('../views/Reviews'))
const Inbox = React.lazy(() => import('../views/Inbox'))
const FileManager = React.lazy(() => import('../views/FileManager'))
const PointOfSale = React.lazy(() => import('../views/PointOfSale'))
const Chat = React.lazy(() => import('../views/Chat'))
const Post = React.lazy(() => import('../views/Post'))
const Calendar = React.lazy(() => import('../views/Calendar'))
const CrudDataList = React.lazy(() => import('../views/CrudDataList'))
const CrudForm = React.lazy(() => import('../views/CrudForm'))
const UsersLayout1 = React.lazy(() => import('../views/UsersLayout1'))
const UsersLayout2 = React.lazy(() => import('../views/UsersLayout2'))
const UsersLayout3 = React.lazy(() => import('../views/UsersLayout3'))
const ProfileOverview1 = React.lazy(() => import('../views/ProfileOverview1'))
const ProfileOverview2 = React.lazy(() => import('../views/ProfileOverview2'))
const ProfileOverview3 = React.lazy(() => import('../views/ProfileOverview3'))
const WizardLayout1 = React.lazy(() => import('../views/WizardLayout1'))
const WizardLayout2 = React.lazy(() => import('../views/WizardLayout2'))
const WizardLayout3 = React.lazy(() => import('../views/WizardLayout3'))
const BlogLayout1 = React.lazy(() => import('../views/BlogLayout1'))
const BlogLayout2 = React.lazy(() => import('../views/BlogLayout2'))
const BlogLayout3 = React.lazy(() => import('../views/BlogLayout3'))
const PricingLayout1 = React.lazy(() => import('../views/PricingLayout1'))
const PricingLayout2 = React.lazy(() => import('../views/PricingLayout2'))
const InvoiceLayout1 = React.lazy(() => import('../views/InvoiceLayout1'))
const InvoiceLayout2 = React.lazy(() => import('../views/InvoiceLayout2'))
const FaqLayout1 = React.lazy(() => import('../views/FaqLayout1'))
const FaqLayout2 = React.lazy(() => import('../views/FaqLayout2'))
const FaqLayout3 = React.lazy(() => import('../views/FaqLayout3'))
const Login = React.lazy(() => import('../views/Login'))
const Register = React.lazy(() => import('../views/Register'))
const ErrorPage = React.lazy(() => import('../views/ErrorPage'))
const UpdateProfile = React.lazy(() => import('../views/UpdateProfile'))
const ChangePassword = React.lazy(() => import('../views/ChangePassword'))
const RegularTable = React.lazy(() => import('../views/RegularTable'))
const Tabulator = React.lazy(() => import('../views/Tabulator'))
const Modal = React.lazy(() => import('../views/Modal'))
const Slideover = React.lazy(() => import('../views/Slideover'))
const Notification = React.lazy(() => import('../views/Notification'))
const Tab = React.lazy(() => import('../views/Tab'))
const Accordion = React.lazy(() => import('../views/Accordion'))
const Button = React.lazy(() => import('../views/Button'))
const Alert = React.lazy(() => import('../views/Alert'))
const ProgressBar = React.lazy(() => import('../views/ProgressBar'))
const Tooltip = React.lazy(() => import('../views/Tooltip'))
const Dropdown = React.lazy(() => import('../views/Dropdown'))
const Typography = React.lazy(() => import('../views/Typography'))
const Icon = React.lazy(() => import('../views/Icon'))
const LoadingIcon = React.lazy(() => import('../views/LoadingIcon'))
const RegularForm = React.lazy(() => import('../views/RegularForm'))
const Datepicker = React.lazy(() => import('../views/Datepicker'))
const TomSelect = React.lazy(() => import('../views/TomSelect'))
const FileUpload = React.lazy(() => import('../views/FileUpload'))
const WysiwygEditor = React.lazy(() => import('../views/WysiwygEditor'))
const Validation = React.lazy(() => import('../views/Validation'))
const DashboardOverview1 = React.lazy(
  () => import('../views/DashboardOverview1')
)
const DashboardOverview2 = React.lazy(
  () => import('../views/DashboardOverview2')
)
const DashboardOverview3 = React.lazy(
  () => import('../views/DashboardOverview3')
)
const DashboardOverview4 = React.lazy(
  () => import('../views/DashboardOverview4')
)
const Chart = React.lazy(() => import('../views/Chart'))
const Slider = React.lazy(() => import('../views/Slider'))
const ImageZoom = React.lazy(() => import('../views/ImageZoom'))

function Router() {
  const routes = [
    {
      path: '/',
      element: <SideMenu />,
      children: [
        {
          path: '/',
          element: <DashboardOverview1 />,
        },
        {
          path: 'dashboard-overview-2',
          element: <DashboardOverview2 />,
        },
        {
          path: 'dashboard-overview-3',
          element: <DashboardOverview3 />,
        },
        {
          path: 'dashboard-overview-4',
          element: <DashboardOverview4 />,
        },
        {
          path: 'categories',
          element: <Categories />,
        },
        {
          path: 'add-product',
          element: <AddProduct />,
        },
        {
          path: 'product-list',
          element: <ProductList />,
        },
        {
          path: 'product-grid',
          element: <ProductGrid />,
        },
        {
          path: 'transaction-list',
          element: <TransactionList />,
        },
        {
          path: 'transaction-detail',
          element: <TransactionDetail />,
        },
        {
          path: 'seller-list',
          element: <SellerList />,
        },
        {
          path: 'seller-detail',
          element: <SellerDetail />,
        },
        {
          path: 'reviews',
          element: <Reviews />,
        },
        {
          path: 'inbox',
          element: <Inbox />,
        },
        {
          path: 'file-manager',
          element: <FileManager />,
        },
        {
          path: 'point-of-sale',
          element: <PointOfSale />,
        },
        {
          path: 'chat',
          element: <Chat />,
        },
        {
          path: 'post',
          element: <Post />,
        },
        {
          path: 'calendar',
          element: <Calendar />,
        },
        {
          path: 'crud-data-list',
          element: <CrudDataList />,
        },
        {
          path: 'crud-form',
          element: <CrudForm />,
        },
        {
          path: 'users-layout-1',
          element: <UsersLayout1 />,
        },
        {
          path: 'users-layout-2',
          element: <UsersLayout2 />,
        },
        {
          path: 'users-layout-3',
          element: <UsersLayout3 />,
        },
        {
          path: 'profile-overview-1',
          element: <ProfileOverview1 />,
        },
        {
          path: 'profile-overview-2',
          element: <ProfileOverview2 />,
        },
        {
          path: 'profile-overview-3',
          element: <ProfileOverview3 />,
        },
        {
          path: 'wizard-layout-1',
          element: <WizardLayout1 />,
        },
        {
          path: 'wizard-layout-2',
          element: <WizardLayout2 />,
        },
        {
          path: 'wizard-layout-3',
          element: <WizardLayout3 />,
        },
        {
          path: 'blog-layout-1',
          element: <BlogLayout1 />,
        },
        {
          path: 'blog-layout-2',
          element: <BlogLayout2 />,
        },
        {
          path: 'blog-layout-3',
          element: <BlogLayout3 />,
        },
        {
          path: 'pricing-layout-1',
          element: <PricingLayout1 />,
        },
        {
          path: 'pricing-layout-2',
          element: <PricingLayout2 />,
        },
        {
          path: 'invoice-layout-1',
          element: <InvoiceLayout1 />,
        },
        {
          path: 'invoice-layout-2',
          element: <InvoiceLayout2 />,
        },
        {
          path: 'faq-layout-1',
          element: <FaqLayout1 />,
        },
        {
          path: 'faq-layout-2',
          element: <FaqLayout2 />,
        },
        {
          path: 'faq-layout-3',
          element: <FaqLayout3 />,
        },
        {
          path: 'update-profile',
          element: <UpdateProfile />,
        },
        {
          path: 'change-password',
          element: <ChangePassword />,
        },
        {
          path: 'regular-table',
          element: <RegularTable />,
        },
        {
          path: 'tabulator',
          element: <Tabulator />,
        },
        {
          path: 'modal',
          element: <Modal />,
        },
        {
          path: 'slideover',
          element: <Slideover />,
        },
        {
          path: 'notification',
          element: <Notification />,
        },
        {
          path: 'tab',
          element: <Tab />,
        },
        {
          path: 'accordion',
          element: <Accordion />,
        },
        {
          path: 'button',
          element: <Button />,
        },
        {
          path: 'alert',
          element: <Alert />,
        },
        {
          path: 'progress-bar',
          element: <ProgressBar />,
        },
        {
          path: 'tooltip',
          element: <Tooltip />,
        },
        {
          path: 'dropdown',
          element: <Dropdown />,
        },
        {
          path: 'typography',
          element: <Typography />,
        },
        {
          path: 'icon',
          element: <Icon />,
        },
        {
          path: 'loading-icon',
          element: <LoadingIcon />,
        },
        {
          path: 'regular-form',
          element: <RegularForm />,
        },
        {
          path: 'datepicker',
          element: <Datepicker />,
        },
        {
          path: 'tom-select',
          element: <TomSelect />,
        },
        {
          path: 'file-upload',
          element: <FileUpload />,
        },
        {
          path: 'wysiwyg-editor',
          element: <WysiwygEditor />,
        },
        {
          path: 'validation',
          element: <Validation />,
        },
        {
          path: 'chart',
          element: <Chart />,
        },
        {
          path: 'slider',
          element: <Slider />,
        },
        {
          path: 'image-zoom',
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: '/sans-menu',
      element: <SansMenu />,
      children: [
        {
          path: 'dashboard-overview-1',
          element: <DashboardOverview1 />,
        },
        {
          path: 'dashboard-overview-2',
          element: <DashboardOverview2 />,
        },
        {
          path: 'dashboard-overview-3',
          element: <DashboardOverview3 />,
        },
        {
          path: 'dashboard-overview-4',
          element: <DashboardOverview4 />,
        },
        {
          path: 'categories',
          element: <Categories />,
        },
        {
          path: 'add-product',
          element: <AddProduct />,
        },
        {
          path: 'product-list',
          element: <ProductList />,
        },
        {
          path: 'product-grid',
          element: <ProductGrid />,
        },
        {
          path: 'transaction-list',
          element: <TransactionList />,
        },
        {
          path: 'transaction-detail',
          element: <TransactionDetail />,
        },
        {
          path: 'seller-list',
          element: <SellerList />,
        },
        {
          path: 'seller-detail',
          element: <SellerDetail />,
        },
        {
          path: 'reviews',
          element: <Reviews />,
        },
        {
          path: 'inbox',
          element: <Inbox />,
        },
        {
          path: 'file-manager',
          element: <FileManager />,
        },
        {
          path: 'point-of-sale',
          element: <PointOfSale />,
        },
        {
          path: 'chat',
          element: <Chat />,
        },
        {
          path: 'post',
          element: <Post />,
        },
        {
          path: 'calendar',
          element: <Calendar />,
        },
        {
          path: 'crud-data-list',
          element: <CrudDataList />,
        },
        {
          path: 'crud-form',
          element: <CrudForm />,
        },
        {
          path: 'users-layout-1',
          element: <UsersLayout1 />,
        },
        {
          path: 'users-layout-2',
          element: <UsersLayout2 />,
        },
        {
          path: 'users-layout-3',
          element: <UsersLayout3 />,
        },
        {
          path: 'profile-overview-1',
          element: <ProfileOverview1 />,
        },
        {
          path: 'profile-overview-2',
          element: <ProfileOverview2 />,
        },
        {
          path: 'profile-overview-3',
          element: <ProfileOverview3 />,
        },
        {
          path: 'wizard-layout-1',
          element: <WizardLayout1 />,
        },
        {
          path: 'wizard-layout-2',
          element: <WizardLayout2 />,
        },
        {
          path: 'wizard-layout-3',
          element: <WizardLayout3 />,
        },
        {
          path: 'blog-layout-1',
          element: <BlogLayout1 />,
        },
        {
          path: 'blog-layout-2',
          element: <BlogLayout2 />,
        },
        {
          path: 'blog-layout-3',
          element: <BlogLayout3 />,
        },
        {
          path: 'pricing-layout-1',
          element: <PricingLayout1 />,
        },
        {
          path: 'pricing-layout-2',
          element: <PricingLayout2 />,
        },
        {
          path: 'invoice-layout-1',
          element: <InvoiceLayout1 />,
        },
        {
          path: 'invoice-layout-2',
          element: <InvoiceLayout2 />,
        },
        {
          path: 'faq-layout-1',
          element: <FaqLayout1 />,
        },
        {
          path: 'faq-layout-2',
          element: <FaqLayout2 />,
        },
        {
          path: 'faq-layout-3',
          element: <FaqLayout3 />,
        },
        {
          path: 'update-profile',
          element: <UpdateProfile />,
        },
        {
          path: 'change-password',
          element: <ChangePassword />,
        },
        {
          path: 'regular-table',
          element: <RegularTable />,
        },
        {
          path: 'tabulator',
          element: <Tabulator />,
        },
        {
          path: 'modal',
          element: <Modal />,
        },
        {
          path: 'slideover',
          element: <Slideover />,
        },
        {
          path: 'notification',
          element: <Notification />,
        },
        {
          path: 'tab',
          element: <Tab />,
        },
        {
          path: 'accordion',
          element: <Accordion />,
        },
        {
          path: 'button',
          element: <Button />,
        },
        {
          path: 'alert',
          element: <Alert />,
        },
        {
          path: 'progress-bar',
          element: <ProgressBar />,
        },
        {
          path: 'tooltip',
          element: <Tooltip />,
        },
        {
          path: 'dropdown',
          element: <Dropdown />,
        },
        {
          path: 'typography',
          element: <Typography />,
        },
        {
          path: 'icon',
          element: <Icon />,
        },
        {
          path: 'loading-icon',
          element: <LoadingIcon />,
        },
        {
          path: 'regular-form',
          element: <RegularForm />,
        },
        {
          path: 'datepicker',
          element: <Datepicker />,
        },
        {
          path: 'tom-select',
          element: <TomSelect />,
        },
        {
          path: 'file-upload',
          element: <FileUpload />,
        },
        {
          path: 'wysiwyg-editor',
          element: <WysiwygEditor />,
        },
        {
          path: 'validation',
          element: <Validation />,
        },
        {
          path: 'chart',
          element: <Chart />,
        },
        {
          path: 'slider',
          element: <Slider />,
        },
        {
          path: 'image-zoom',
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: '/simple-menu',
      element: <SimpleMenu />,
      children: [
        {
          path: 'dashboard-overview-1',
          element: <DashboardOverview1 />,
        },
        {
          path: 'dashboard-overview-2',
          element: <DashboardOverview2 />,
        },
        {
          path: 'dashboard-overview-3',
          element: <DashboardOverview3 />,
        },
        {
          path: 'dashboard-overview-4',
          element: <DashboardOverview4 />,
        },
        {
          path: 'categories',
          element: <Categories />,
        },
        {
          path: 'add-product',
          element: <AddProduct />,
        },
        {
          path: 'product-list',
          element: <ProductList />,
        },
        {
          path: 'product-grid',
          element: <ProductGrid />,
        },
        {
          path: 'transaction-list',
          element: <TransactionList />,
        },
        {
          path: 'transaction-detail',
          element: <TransactionDetail />,
        },
        {
          path: 'seller-list',
          element: <SellerList />,
        },
        {
          path: 'seller-detail',
          element: <SellerDetail />,
        },
        {
          path: 'reviews',
          element: <Reviews />,
        },
        {
          path: 'inbox',
          element: <Inbox />,
        },
        {
          path: 'file-manager',
          element: <FileManager />,
        },
        {
          path: 'point-of-sale',
          element: <PointOfSale />,
        },
        {
          path: 'chat',
          element: <Chat />,
        },
        {
          path: 'post',
          element: <Post />,
        },
        {
          path: 'calendar',
          element: <Calendar />,
        },
        {
          path: 'crud-data-list',
          element: <CrudDataList />,
        },
        {
          path: 'crud-form',
          element: <CrudForm />,
        },
        {
          path: 'users-layout-1',
          element: <UsersLayout1 />,
        },
        {
          path: 'users-layout-2',
          element: <UsersLayout2 />,
        },
        {
          path: 'users-layout-3',
          element: <UsersLayout3 />,
        },
        {
          path: 'profile-overview-1',
          element: <ProfileOverview1 />,
        },
        {
          path: 'profile-overview-2',
          element: <ProfileOverview2 />,
        },
        {
          path: 'profile-overview-3',
          element: <ProfileOverview3 />,
        },
        {
          path: 'wizard-layout-1',
          element: <WizardLayout1 />,
        },
        {
          path: 'wizard-layout-2',
          element: <WizardLayout2 />,
        },
        {
          path: 'wizard-layout-3',
          element: <WizardLayout3 />,
        },
        {
          path: 'blog-layout-1',
          element: <BlogLayout1 />,
        },
        {
          path: 'blog-layout-2',
          element: <BlogLayout2 />,
        },
        {
          path: 'blog-layout-3',
          element: <BlogLayout3 />,
        },
        {
          path: 'pricing-layout-1',
          element: <PricingLayout1 />,
        },
        {
          path: 'pricing-layout-2',
          element: <PricingLayout2 />,
        },
        {
          path: 'invoice-layout-1',
          element: <InvoiceLayout1 />,
        },
        {
          path: 'invoice-layout-2',
          element: <InvoiceLayout2 />,
        },
        {
          path: 'faq-layout-1',
          element: <FaqLayout1 />,
        },
        {
          path: 'faq-layout-2',
          element: <FaqLayout2 />,
        },
        {
          path: 'faq-layout-3',
          element: <FaqLayout3 />,
        },
        {
          path: 'update-profile',
          element: <UpdateProfile />,
        },
        {
          path: 'change-password',
          element: <ChangePassword />,
        },
        {
          path: 'regular-table',
          element: <RegularTable />,
        },
        {
          path: 'tabulator',
          element: <Tabulator />,
        },
        {
          path: 'modal',
          element: <Modal />,
        },
        {
          path: 'slideover',
          element: <Slideover />,
        },
        {
          path: 'notification',
          element: <Notification />,
        },
        {
          path: 'tab',
          element: <Tab />,
        },
        {
          path: 'accordion',
          element: <Accordion />,
        },
        {
          path: 'button',
          element: <Button />,
        },
        {
          path: 'alert',
          element: <Alert />,
        },
        {
          path: 'progress-bar',
          element: <ProgressBar />,
        },
        {
          path: 'tooltip',
          element: <Tooltip />,
        },
        {
          path: 'dropdown',
          element: <Dropdown />,
        },
        {
          path: 'typography',
          element: <Typography />,
        },
        {
          path: 'icon',
          element: <Icon />,
        },
        {
          path: 'loading-icon',
          element: <LoadingIcon />,
        },
        {
          path: 'regular-form',
          element: <RegularForm />,
        },
        {
          path: 'datepicker',
          element: <Datepicker />,
        },
        {
          path: 'tom-select',
          element: <TomSelect />,
        },
        {
          path: 'file-upload',
          element: <FileUpload />,
        },
        {
          path: 'wysiwyg-editor',
          element: <WysiwygEditor />,
        },
        {
          path: 'validation',
          element: <Validation />,
        },
        {
          path: 'chart',
          element: <Chart />,
        },
        {
          path: 'slider',
          element: <Slider />,
        },
        {
          path: 'image-zoom',
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: '/top-menu',
      element: <TopMenu />,
      children: [
        {
          path: 'dashboard-overview-1',
          element: <DashboardOverview1 />,
        },
        {
          path: 'dashboard-overview-2',
          element: <DashboardOverview2 />,
        },
        {
          path: 'dashboard-overview-3',
          element: <DashboardOverview3 />,
        },
        {
          path: 'dashboard-overview-4',
          element: <DashboardOverview4 />,
        },
        {
          path: 'categories',
          element: <Categories />,
        },
        {
          path: 'add-product',
          element: <AddProduct />,
        },
        {
          path: 'product-list',
          element: <ProductList />,
        },
        {
          path: 'product-grid',
          element: <ProductGrid />,
        },
        {
          path: 'transaction-list',
          element: <TransactionList />,
        },
        {
          path: 'transaction-detail',
          element: <TransactionDetail />,
        },
        {
          path: 'seller-list',
          element: <SellerList />,
        },
        {
          path: 'seller-detail',
          element: <SellerDetail />,
        },
        {
          path: 'reviews',
          element: <Reviews />,
        },
        {
          path: 'inbox',
          element: <Inbox />,
        },
        {
          path: 'file-manager',
          element: <FileManager />,
        },
        {
          path: 'point-of-sale',
          element: <PointOfSale />,
        },
        {
          path: 'chat',
          element: <Chat />,
        },
        {
          path: 'post',
          element: <Post />,
        },
        {
          path: 'calendar',
          element: <Calendar />,
        },
        {
          path: 'crud-data-list',
          element: <CrudDataList />,
        },
        {
          path: 'crud-form',
          element: <CrudForm />,
        },
        {
          path: 'users-layout-1',
          element: <UsersLayout1 />,
        },
        {
          path: 'users-layout-2',
          element: <UsersLayout2 />,
        },
        {
          path: 'users-layout-3',
          element: <UsersLayout3 />,
        },
        {
          path: 'profile-overview-1',
          element: <ProfileOverview1 />,
        },
        {
          path: 'profile-overview-2',
          element: <ProfileOverview2 />,
        },
        {
          path: 'profile-overview-3',
          element: <ProfileOverview3 />,
        },
        {
          path: 'wizard-layout-1',
          element: <WizardLayout1 />,
        },
        {
          path: 'wizard-layout-2',
          element: <WizardLayout2 />,
        },
        {
          path: 'wizard-layout-3',
          element: <WizardLayout3 />,
        },
        {
          path: 'blog-layout-1',
          element: <BlogLayout1 />,
        },
        {
          path: 'blog-layout-2',
          element: <BlogLayout2 />,
        },
        {
          path: 'blog-layout-3',
          element: <BlogLayout3 />,
        },
        {
          path: 'pricing-layout-1',
          element: <PricingLayout1 />,
        },
        {
          path: 'pricing-layout-2',
          element: <PricingLayout2 />,
        },
        {
          path: 'invoice-layout-1',
          element: <InvoiceLayout1 />,
        },
        {
          path: 'invoice-layout-2',
          element: <InvoiceLayout2 />,
        },
        {
          path: 'faq-layout-1',
          element: <FaqLayout1 />,
        },
        {
          path: 'faq-layout-2',
          element: <FaqLayout2 />,
        },
        {
          path: 'faq-layout-3',
          element: <FaqLayout3 />,
        },
        {
          path: 'update-profile',
          element: <UpdateProfile />,
        },
        {
          path: 'change-password',
          element: <ChangePassword />,
        },
        {
          path: 'regular-table',
          element: <RegularTable />,
        },
        {
          path: 'tabulator',
          element: <Tabulator />,
        },
        {
          path: 'modal',
          element: <Modal />,
        },
        {
          path: 'slideover',
          element: <Slideover />,
        },
        {
          path: 'notification',
          element: <Notification />,
        },
        {
          path: 'tab',
          element: <Tab />,
        },
        {
          path: 'accordion',
          element: <Accordion />,
        },
        {
          path: 'button',
          element: <Button />,
        },
        {
          path: 'alert',
          element: <Alert />,
        },
        {
          path: 'progress-bar',
          element: <ProgressBar />,
        },
        {
          path: 'tooltip',
          element: <Tooltip />,
        },
        {
          path: 'dropdown',
          element: <Dropdown />,
        },
        {
          path: 'typography',
          element: <Typography />,
        },
        {
          path: 'icon',
          element: <Icon />,
        },
        {
          path: 'loading-icon',
          element: <LoadingIcon />,
        },
        {
          path: 'regular-form',
          element: <RegularForm />,
        },
        {
          path: 'datepicker',
          element: <Datepicker />,
        },
        {
          path: 'tom-select',
          element: <TomSelect />,
        },
        {
          path: 'file-upload',
          element: <FileUpload />,
        },
        {
          path: 'wysiwyg-editor',
          element: <WysiwygEditor />,
        },
        {
          path: 'validation',
          element: <Validation />,
        },
        {
          path: 'chart',
          element: <Chart />,
        },
        {
          path: 'slider',
          element: <Slider />,
        },
        {
          path: 'image-zoom',
          element: <ImageZoom />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/error-page',
      element: <ErrorPage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]

  return useRoutes(routes)
}

export default Router
