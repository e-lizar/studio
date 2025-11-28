"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit, Plus, Trash } from "lucide-react";

const users = [
  { id: "USR001", name: "Jane Doe", email: "jane.d@example.com", role: "Patient", joined: "2023-01-15" },
  { id: "USR002", name: "Dr. Ben Carter", email: "b.carter@clinic.com", role: "Doctor", joined: "2023-02-20" },
  { id: "USR003", name: "Maryanne Odira", email: "maryanne.o@example.com", role: "Patient", joined: "2023-03-10" },
  { id: "USR004", name: "Dr. Evelyn Reed", email: "e.reed@clinic.com", role: "Doctor", joined: "2023-04-05" },
];

const resources = [
  { id: "RES001", title: "Understanding Ovarian Cancer", lastUpdated: "2024-05-01" },
  { id: "RES002", title: "Common Symptoms", lastUpdated: "2024-05-01" },
  { id: "RES003", title: "Key Risk Factors", lastUpdated: "2024-05-15" },
];

const centers = [
  { id: "CTR001", name: "Nairobi Women's Hospital", location: "Nairobi", contact: "+254709667000" },
  { id: "CTR002", name: "Aga Khan University Hospital", location: "Nairobi", contact: "+254203662000" },
  { id: "CTR003", name: "Moi Teaching & Referral Hospital", location: "Eldoret", contact: "+254722209955" },
];

export default function AdminPage() {
  return (
    <Tabs defaultValue="users" className="space-y-4">
      <TabsList>
        <TabsTrigger value="users">Manage Users</TabsTrigger>
        <TabsTrigger value="resources">Manage Resources</TabsTrigger>
        <TabsTrigger value="centers">Manage Centers</TabsTrigger>
      </TabsList>

      {/* Manage Users Tab */}
      <TabsContent value="users">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle className="font-headline">User Accounts</CardTitle>
              <CardDescription>View and manage all user accounts.</CardDescription>
            </div>
            <Button><Plus className="mr-2 h-4 w-4" /> Add User</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Date Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell><Badge variant={user.role === 'Doctor' ? 'default' : 'secondary'}>{user.role}</Badge></TableCell>
                    <TableCell>{user.joined}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
                      <Button variant="destructive" size="icon"><Trash className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Manage Resources Tab */}
      <TabsContent value="resources">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle className="font-headline">Educational Resources</CardTitle>
              <CardDescription>Update awareness and educational content.</CardDescription>
            </div>
            <Button><Plus className="mr-2 h-4 w-4" /> Add Resource</Button>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {resources.map(res => (
                        <TableRow key={res.id}>
                            <TableCell className="font-medium">{res.title}</TableCell>
                            <TableCell>{res.lastUpdated}</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
                                <Button variant="destructive" size="icon"><Trash className="h-4 w-4" /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Manage Centers Tab */}
      <TabsContent value="centers">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle className="font-headline">Screening Centers</CardTitle>
              <CardDescription>Maintain the database of screening centers.</CardDescription>
            </div>
            <Button><Plus className="mr-2 h-4 w-4" /> Add Center</Button>
          </CardHeader>
          <CardContent>
          <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {centers.map(center => (
                  <TableRow key={center.id}>
                    <TableCell className="font-medium">{center.name}</TableCell>
                    <TableCell>{center.location}</TableCell>
                    <TableCell>{center.contact}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
                      <Button variant="destructive" size="icon"><Trash className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
