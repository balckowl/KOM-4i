import Header from "./components/base/header"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Works = () => {
  const trendsYonkoma = Array(10).fill(
    {
      title: "たいとる",
      author: "kusira",
      likes: 0,
      panels: [
        "https://placeholder.pics/svg/200x112",
        "https://placeholder.pics/svg/200x112",
        "https://placeholder.pics/svg/200x112",
        "https://placeholder.pics/svg/200x112"
      ]
    }
  );

  const deleteYonkoma = () => {
    console.log("deleted")
  }
  return (
    <div>
      <Header />
      <div className="container">
        {/*  heading */}
        <div className="w-max my-12">
          <p className="text">・自分の作品</p>
          <div className="w-full h-[4px] bg-[#7fb800]"></div>
          <h2 className="text-4xl font-bold">MY WORKS</h2>
        </div>
        <div className="flex gap-8 flex-wrap w-10/12 mx-auto justify-center xl:justify-start">
          {trendsYonkoma.map((trend, i) => (
            <div key={i}>
              <p className="mb-1 ml-1">{trendsYonkoma[i].author}</p>
              {/* 漫画ページ */}
              <div className="w-auto h-max border-black border-[1px] p-4">
                <div className="w-max mx-auto">
                  <p className="text-center mb-2 relative z-10 border-black border-[1px]">
                    {trendsYonkoma[i].title}
                  </p>

                  {[0, 1, 2, 3].map((j, _) => (
                    <div key={j}>
                      <div className="mx-auto w-max relative z-10">
                        <img src={trendsYonkoma[i].panels[j]} className="mb-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-2">
                {/* いいね数 */}
                <div className="flex gap-4 p-2 items-center">
                  <div className="text-[24px] text-red-500">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <p className="h-[24px] flex items-center">{trendsYonkoma[i].likes}</p>
                </div>

                {/* 削除ボタン */}
                <Dialog>
                  <DialogTrigger>
                    <div className="text-xl cursor-pointer hover:opacity-80 transition-all"
                    >🗑</div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>本当に削除しますか</DialogTitle>
                      <p className="text-sm pt-2">削除した作品は復元できません</p>
                      <img src="/images/works/hengao.png" className="w-[50%] mx-auto" />
                      <DialogDescription className="flex justify-around pt-10">
                        <Button
                          onClick={() => deleteYonkoma()}
                          className="bg-[#00b82e] hover:bg-[#29882e]"
                        >はい</Button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Works