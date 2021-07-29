import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  Row,
  Button,
  Table,
  Space,
  Popconfirm,
} from "antd";
import { v4 as uuidv4 } from 'uuid';

import ModifyProductModal from './components/ModifyProductModal';

import {
  createProductAction,
  editProductAction,
  deleteProductAction,
} from '../../../redux/actions';

function ProductListHookPage(props) {
  // "", "create", "edit"
  const [isShowModifyModal, setIsShowModifyModal] = useState('');
  const [modifyProductData, setModifyProductData] = useState({});

  const { productList } = useSelector(({productReducer}) => productReducer);

  const dispatch = useDispatch();

  function handleSubmitForm(values) {
    if (isShowModifyModal === 'create') {
      dispatch(createProductAction({
        id: uuidv4(),
        ...values,
      }));
    } else {
      dispatch(editProductAction({
        id: modifyProductData.id,
        ...values,
      }));
    }
    setIsShowModifyModal('');
  }

  const tableColumn = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (value) => value.toLocaleString(),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button
              type="primary"
              ghost
              onClick={() => {
                setIsShowModifyModal('edit');
                setModifyProductData(record);
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this product?"
              onConfirm={() => dispatch(deleteProductAction({ id: record.id }))}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Space>
        )
      }
    },
  ];

  const tableData = productList.map((productItem, productIndex) => {
    return {
      key: productIndex,
      ...productItem,
    }
  })

  return (
    <div>
      <div style={{ padding: 16 }}>
        <div>Product Manage</div>
        <Row justify="end" style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={() => {
              setIsShowModifyModal('create');
              setModifyProductData({ name: '', price: 0 });
            }}
          >
            Add Product
          </Button>
        </Row>
        <Table columns={tableColumn} dataSource={tableData} />
      </div>
      <ModifyProductModal
        isShowModifyModal={isShowModifyModal}
        setIsShowModifyModal={setIsShowModifyModal}
        handleSubmitForm={handleSubmitForm}
        modifyProductData={modifyProductData}
      />
    </div>
  );
}

export default ProductListHookPage;
