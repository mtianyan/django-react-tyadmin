import ProDescriptions from '@ant-design/pro-descriptions';
import { Drawer } from 'antd';

const DetailShow = (props: any) => {
  const showDetail = props.showDetail;
  const currentRow = props.currentRow;
  const columns = props.columns;
  const setCurrentRow = props.setCurrentRow;
  const setShowDetail = props.setShowDetail;
  return (
    <Drawer
      width={600}
      visible={showDetail}
      onClose={() => {
        setCurrentRow(undefined);
        setShowDetail(false);
      }}
      closable={false}
    >
      {currentRow?.username && (
        <ProDescriptions
          column={2}
          title={currentRow?.username}
          request={async () => ({
            data: currentRow || {},
          })}
          columns={columns}
        />
      )}
    </Drawer>
  );
};

export default DetailShow;
