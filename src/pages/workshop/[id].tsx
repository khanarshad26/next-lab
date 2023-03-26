/* eslint-disable @next/next/no-img-element */
import { AvatarDescription, SpecialCard } from "@/components";
import { getMetaDescription } from "@/helpers";
import { workshops } from "@/store";
import { IChapter, IWorkshop } from "@/types";
import Head from "next/head";
import { useRouter } from "next/router";
import Error from "../404";

const CourseDetails = () => {
  const { id } = useRouter().query as { id: string };
  const workshop: IWorkshop | undefined = workshops.find((w) => w.id === id);

  return (
    <>
      {workshop ? (
        <>
          <Head>
            <title>{workshop.title}</title>
            <meta
              name="description"
              content={getMetaDescription(workshop.summary, workshop.description)}
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/lablogo.png" />
          </Head>
          <section
            id="course-details"
            className="course-details"
            style={{ marginTop: "60px" }}
          >
            <div
              className="container"
              // data-aos="fade-up"
            >
              <div className="row">
                <div className="col-lg-8">
                  <img src={workshop.image} className="img-fluid" alt="" />
                  <h3>{workshop.title}</h3>
                  <p>{workshop.description}</p>
                </div>
                <div className="col-lg-4">
                  <SpecialCard />
                </div>
              </div>
              <CourseWorkNative courseWork={workshop.courseWork} />
              <AvatarDescription />
            </div>
          </section>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

const CourseWorkNative = ({
  courseWork,
}: {
  courseWork: Record<string, IChapter>;
}) => {
  return (
    <>
      <div style={{ margin: "30px 0px 5px 0px" }} className="comments">
        <h4 className="comments-count">Course Work</h4>
        {Object.values(courseWork).map((chapter, index) => {
          return (
            <>
              <section
                id="cource-details-tabs"
                key={"chapter_" + index}
                className="cource-details-tabs"
                style={{ paddingBottom: "20px" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9 mt-4 mt-lg-0">
                      <div className="tab-content">
                        <TabPane
                          key={"chapter_tabpane_" + index}
                          tabPane={chapter}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
};

const TabPane = ({ tabPane }: { tabPane: IChapter }) => {
  const { title, description } = tabPane;
  return (
    <>
      <div className="tab-pane active show" id="tab-1">
        <div className="row">
          <div className="col-lg-8 details order-2 order-lg-1">
            <h5>{title}</h5>
            <p className="fst-italic">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
