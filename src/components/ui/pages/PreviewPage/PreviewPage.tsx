import { FC } from "react"
import styles from "./preview.module.scss"
import Logo from "../../../../assets/images/logo.jpg"
import Widget from "../../../common/widget/Widget"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { WidgetService } from "../../../../services/widgetService/widget.service"

const PreviewPage: FC = () => {
  const { data, isLoading } = useQuery(["main widget"], () =>
    WidgetService.getMainWidgets()
  )
  const widget = data?.data

  return (
    <div className={styles.preview}>
      <div className={styles.previewContainer}>
        <div className={styles.logo}>
          <div className={styles.logoimg}>
            <center>
              <img src={Logo} alt='logo' className={styles.img} />
            </center>
          </div>
          <h1 className={styles.title}>Crypto course 2.0</h1>
        </div>
        <p className={styles.text}>Следите за рынками из любой точки мира!</p>
        <div className={styles.start}>
          <center>
            <Link to='/home' className={styles.btn}>
              Начать
            </Link>
          </center>
        </div>

        <div className={styles.widgetblock}>
          {isLoading ? (
            <></>
          ) : widget ? (
            <>
              <Link to='/coin/detail/bitcoin'>
                <Widget
                  name={widget[0].name}
                  current_price={widget[0].current_price}
                  image={widget[0].image}
                  price_change_percentage_24h={
                    widget[0].price_change_percentage_24h
                  }
                />
              </Link>
              <Link to='/coin/detail/ethereum'>
                <Widget
                  name={widget[1].name}
                  current_price={widget[1].current_price}
                  image={widget[1].image}
                  price_change_percentage_24h={
                    widget[0].price_change_percentage_24h
                  }
                />
              </Link>
            </>
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PreviewPage