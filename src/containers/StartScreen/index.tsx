import { FC } from "react";
import { Btn } from "../../ui";
import { ReactComponent as CreateIcon } from '../../assets/icons/other/create-character-icon.svg'
import { ReactComponent as ImportIcon } from '../../assets/icons/other/import-icon.svg'
// import { IMain } from "./StartScreen.d";
import styles from "./StartScreen.module.scss";

const StartScreen: FC = () => {
  return (
    <section className={styles.startScreen}>
      <div className="container">
        <div className={styles.wrapper}>
          <Btn className={styles.btn} text={'Создать персонажа'}>
            <CreateIcon width={16} height={16} />
          </Btn>
          <Btn className={styles.btn} text={'Загрузить персонажа'}>
            <ImportIcon width={16} height={16} />
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default StartScreen;
