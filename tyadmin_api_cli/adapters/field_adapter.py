FIELD_ADAPTER = {
    'django_celery_beat': {
        'PeriodicTask': {
            'task': {
                'index_import': """import {queryPeriodicTask_task} from './service';""",
                'field': """
            {

                      title: 'task',
                      dataIndex: 'task',
                      rules: [
                      ],
    renderFormItem: (item, {value, onChange}) => {
      return dealPureSelectField(item, value, onChange, PeriodicTask_task);
    },    },
            """,
                'effect_state': """    const [PeriodicTask_task, setPeriodicTask_task] = useState([]);
  useEffect(() => {
    queryPeriodicTask_task().then(value => {
      setPeriodicTask_task(value);
    });
  }, []);""",
                'services': """export async function queryPeriodicTask_task(params) {
  return request('/api/xadmin/v1/adapters/periodic_task/task', {
    params,
  });
}"""
            }
        }
    }
}
