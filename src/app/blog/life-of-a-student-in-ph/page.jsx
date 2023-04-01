export const metadata = {
  title: "Life of a Student in the Philippines",
  description: "",
};

export default function Blog() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        Life of a Student in the Philippines
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          2023-03-27
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
      </div>
      <div className="prose dark:prose-invert">
        <p>
          As a student in the Philippines, life can be both exciting and
          challenging. From the early morning wake-up calls to the late-night
          study sessions, there&apos;s always something going on.
        </p>
        <h2>Getting to School</h2>
        <p>
          One of the biggest challenges for students in the Philippines is
          transportation. Many students have to travel long distances to get to
          school, and the traffic can be very congested. Some students have to
          wake up as early as 4 AM just to get to school on time.
        </p>
        <h2>Classes and Teachers</h2>
        <p>
          Once students get to school, they are usually in classes for the
          entire day. The curriculum is often rigorous, with a strong focus on
          math, science, and language arts. Teachers are typically very strict,
          and students are expected to be respectful and attentive in class.
        </p>
        <h2>Extracurricular Activities</h2>
        <p>
          In addition to their academic work, many students in the Philippines
          participate in extracurricular activities. These can include sports,
          music, and dance, among others. Extracurricular activities are a great
          way for students to develop their skills and interests, and to make
          new friends.
        </p>
        <h2>Social Life</h2>
        <p>
          When it comes to social life, Filipino students are known for their
          strong sense of community. They often form close-knit groups with
          their classmates and participate in group activities outside of
          school. However, socializing is not always easy for students who live
          far away from school or who have heavy academic schedules.
        </p>
      </div>
    </section>
  );
}
