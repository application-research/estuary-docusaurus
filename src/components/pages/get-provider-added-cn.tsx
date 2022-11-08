import styles from '@site/legacy/pages/Page.module.scss';
import rstyles from '@site/legacy/components/RichText.module.scss';

import * as React from 'react';
import * as U from '@site/legacy/common/utilities';

import Layout from "@theme/Layout";
import Input from '@site/legacy/components/Input';
import Textarea from '@site/legacy/components/Textarea';
import Button from '@site/legacy/components/Button';


function GetProviderAdded(props) {
  const [state, setState] = React.useState({
    name: '',
    provider: '',
    configuration: '',
    message: '',
    success: false,
    loading: false,
  });

  return (
    < >
      {state.success ? (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>谢谢!</h1>
          <p>
            感谢申请，我们所有团队成员都会有机会看到它！
          </p>
        </div>
      ) : (
        <div>
          <p>
            想要将你的存储供应商ID加入到{' '}
            <a href="https://estuary.tech" target="_blank">
              https://estuary.tech
            </a>{' '}
            并且收到已验证存储订单? 请填写申请表，如果我们相信你的存储系统是有资格的我们会把它加入Estuary的存储服务商列表中，
            加入之后你应该就会开始收到存储订单。
          </p>

          <div className={styles.title} style={{ marginTop: 48 }}>
            姓名
          </div>
          <Input
            style={{ marginTop: 8 }}
            value={state.name}
            placeholder="ex: Mark Walters"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="name"
          />
          <div className={styles.title}>存储供应商ID</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.provider}
            placeholder="ex: f0100"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="provider"
          />
          <div className={styles.title}>存储系统配置</div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.configuration}
            placeholder="设备规格，存储服务价格，封装订单速度等..."
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="configuration"
            maxLength={5000}
          />

          <div className={styles.title}>备注</div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.message}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="message"
            maxLength={5000}
          />

          <ul className={styles.ul}>
            <li className={styles.li}>
              我们还在Estuary初期开发阶段并且我们更倾向于愿意存储能被任何人获取的公有数据的存储供应商。
            </li>
          </ul>

          <div className={styles.action}>
            <Button
              loading={state.loading}
              onClick={async () => {
                if (U.isEmpty(state.name)) {
                  alert('你必须提供你的姓名。');
                  return;
                }

                if (U.isEmpty(state.provider)) {
                  alert('你必须提供你的存储供应商ID。');
                  return;
                }

                if (U.isEmpty(state.configuration)) {
                  alert('你需要提供反馈。');
                  return;
                }

                setState({ ...state, loading: true });
                try {
                  fetch('https://estuary-docs.onrender.com/api/request-add-provider', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: state.name,
                      provider: state.provider,
                      configuration: state.configuration,
                      message: state.message,
                    }),
                  });
                } catch (e) {
                  console.log(e);
                }

                setState({
                  ...state,
                  success: true,
                  loading: true,
                  message: '',
                  configuration: '',
                });
              }}
            >
              提交
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default GetProviderAdded;
