const Table = ({ projects }) => {
    return (
      <div className="w-[90%] overflow-hidden rounded-xl border-2 border-gray-800 pt-3">
        <table className="w-full text-sm text-left rtl:text-right text-white dark:text-white border-collapse">
          <thead className="text-xs text-white uppercase bg-black dark:bg-black dark:text-white">
            <tr className="bg-black border-b dark:border-gray-400 border-gray-400">
              <th className="px-6 py-3">Project</th>
              <th className="px-6 py-3">Progress</th>
              <th className="px-6 py-3">Deadline</th>
              <th className="px-6 py-3">Pending Tasks</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="bg-black border-t dark:border-gray-400 border-gray-400">
                <td className="px-6 py-4">{project.name}</td>
                <td className="px-6 py-4">{project.progress}</td>
                <td className="px-6 py-4">
                  <p className="p-2 text-center rounded-[12px] w-[155px] bg-[#333333]">{project.deadline}</p>
                </td>
                <td className="px-6 py-4">{project.pendingTasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  
  