import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: Task;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <BsTrash size={20} />
      </button>
    </div>
  );
}
