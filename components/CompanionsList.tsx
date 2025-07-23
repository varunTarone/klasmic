import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps{
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({ companions, classNames}: CompanionsListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className="font-bold text-3xl">Recent Session</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({id, subject, name, topic, duration}) => (
            <TableRow key={id}>
              <TableCell className="font-medium">
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={name}
                        width={35}
                        height={35}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-2xl">
                        {name}
                      </p>
                      <p className="text-lg">
                        {topic}
                      </p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {subject}
                </div>
                <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell className="flex items-center gap-2 justify-end w-full">
                <p className="text-2xl">
                  {duration} {' '}
                  <span className="max-md:hidden">mins</span>  
                </p>
                  <Image
                    src={`/icons/clock.svg`}
                    alt={subject}
                    width={14}
                    height={14}
                    className="md:hidden"
                  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionsList