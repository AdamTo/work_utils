# from urllib.parse import non_hierarchical


def getRawProjectsArray(fileName):
    projects = []
    with open(fileName, 'r') as file:
        for line in file:
            projects.append(line.strip())
    return projects


def removeDuplicatesCaseInsensitive(project_list):
    howManyTimes = {}
    for project in project_list:
        if project.lower() not in howManyTimes:
            howManyTimes[project.lower()] = 1
        else:
            howManyTimes[project.lower()] += 1
    return sorted(
        howManyTimes.items(), key=lambda x: x[1], reverse=True)


def saveOutput(dataTuple, fileName):
    non_projects = {}
    with open(fileName, 'w') as file:
        for project in dataTuple:
            if project[0] == 'tdcm other' or project[0] == 'sales' or project[0] == 'administration':
                non_projects[project[0]] = project[1]
                continue

            print(f"{project[0]} {project[1]}")
            file.write(f"{project[0]} {project[1]}\n")
        for key in non_projects:
            print(f"{key} {non_projects[key]}")
            file.write(f"{key} {non_projects[key]}\n")
    print(5*'-', 'PROCES FINISHED', 5*'-')


saveOutput(removeDuplicatesCaseInsensitive(
    getRawProjectsArray('raw.txt')), '_output.txt')
