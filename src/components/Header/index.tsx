import todoLogo from '../../assets/TODO.svg';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState, ChangeEvent, FormEvent } from 'react';

interface HeaderProps {
  handleAddTask: (title: string) => void;
}

export function Header({ handleAddTask }: HeaderProps) {
  const [title, setTitle] = useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Todo Logo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button type="submit">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
