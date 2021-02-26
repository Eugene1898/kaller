import styles from './position_item.module.css'

function PositionPreview({ props }) {

  return (
    <div className={styles.position_container}>
      <h4>Job title</h4>
      <p className={styles.position_name}>{props.title}</p>
      <h4>Employment Type</h4>
      <p className={styles.position_detail}>{props.type}</p>
    </div>
  );
}

export default PositionPreview
